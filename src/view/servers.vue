<template>
  <el-form inline :model="searchForm">
    <el-form-item
      label="服务器名"
      :rules="[{ required: true, message: '请填写服务器名' }]"
      prop="name"
    >
      <el-input v-model="searchForm.name"></el-input>
    </el-form-item>
    <el-form-item label="地区" class="w-[120px]">
      <el-select v-model="searchForm.region" clearable>
        <el-option label="全部" value="all"></el-option>
        <el-option label="亚洲" value="asia"></el-option>
        <el-option label="欧洲" value="eu"></el-option>
        <el-option label="北美" value="nam"></el-option>
        <el-option label="南美" value="sam"></el-option>
        <el-option label="澳大利亚" value="au"></el-option>
        <el-option label="奥希阿纳" value="oc"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="平台" class="w-[120px]">
      <el-select v-model="searchForm.platform" clearable>
        <el-option label="PC" value="pc"></el-option>
        <el-option label="XBOX" value="xboxone"></el-option>
        <el-option label="PS4" value="ps4"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="searchServers">搜索</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
  <div v-loading="loading" class="h-[calc(100vh_-_150px)]">
    <el-auto-resizer>
      <template #default="{ height, width }">
        <el-table-v2
          :estimated-row-height="80"
          :columns="tableColumn"
          :data="tableData"
          :width="width"
          :height="height"
          fixed
        >
          <template #cell="{ column, rowData }">
            <div v-if="column.key === 'map'" class="h-20 p-2">
              <img :src="rowData.url" class="w-full h-full block rounded" />
            </div>
            <div v-if="column.key === 'currentMap'">
              {{
                map[rowData.currentMap as keyof typeof map] ||
                rowData.currentMap
              }}
            </div>
            <div v-if="column.key === 'country'">
              {{ rowData.country }} - {{ rowData.region }}
            </div>
            <div v-if="column.key === 'mode'">
              {{ mode[rowData.mode as keyof typeof mode] || rowData.mode }}
            </div>
            <template v-if="column.key === 'detail'">
              <el-button type="primary" @click="getDetail(rowData)">
                查看详情
              </el-button>
            </template>
          </template>
        </el-table-v2>
      </template>
    </el-auto-resizer>
  </div>

  <el-drawer
    v-model="drawer"
    append-to-body
    title="服务器详情"
    size="70%"
    direction="rtl"
  >
    <div class="mb-3 text-xl">地图循环</div>
    <div class="mb-4 flex flex-wrap">
      <el-card
        v-for="item in detail.rotation"
        :key="item.index"
        class="w-[256px] mr-2 mb-2"
      >
        <img :src="item.image" class="w-full rounded mb-2" />
        <div class="flex justify-between">
          <span>{{ map[item.mapname as keyof typeof map] }}</span>
          <span>{{ mode[item.mode as keyof typeof mode] }}</span>
        </div>
      </el-card>
    </div>
    <div class="mb-3 text-xl">玩家</div>
    <el-card>
      <div class="flex">
        <div class="w-[50%] mr-4">
          <el-tag size="large" class="mb-2">
            {{ detail.players.teamOne.name }}
          </el-tag>
          <el-table border :data="detail.players.teamOne.players">
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="latency" label="延迟">
              <template #default="{ row }"> {{ row.latency }}ms </template>
            </el-table-column>
            <el-table-column prop="slot" label="加入时间">
              <template #default="{ row }">
                {{ dayjs(row['join_time'] / 1000).format('HH:mm:ss') }}
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template #default="{ row }">
                <el-button type="primary" @click="searchProfile(row)">
                  查看战绩
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="w-[50%]">
          <el-tag size="large" class="mb-2">
            {{ detail.players.teamTwo.name }}
          </el-tag>
          <el-table border :data="detail.players.teamTwo.players">
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="latency" label="延迟">
              <template #default="{ row }"> {{ row.latency }}ms </template>
            </el-table-column>
            <el-table-column prop="slot" label="加入时间">
              <template #default="{ row }">
                {{ dayjs(row['join_time'] / 1000).format('HH:mm:ss') }}
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template #default="{ row }">
                <el-button type="primary" @click="searchProfile(row)">
                  查看战绩
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-card>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { map, mode } from '@/const/enums';
import {
  getServers,
  ServersData,
  Rotation,
  Player,
  getServerDetail,
  getServerPlayers
} from '@/api/bfv/index';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';

const router = useRouter();

const tableColumn = ref([
  {
    key: 'prefix',
    dataKey: 'prefix',
    title: '服务器名',
    width: 400,
    fixed: true
  },
  {
    key: 'map',
    dataKey: 'url',
    title: '缩略图',
    width: 200
  },
  {
    key: 'currentMap',
    dataKey: 'currentMap',
    title: '当前地图',
    width: 200
  },
  {
    key: 'mode',
    dataKey: 'mode',
    title: '模式',
    width: 200
  },
  {
    key: 'country',
    dataKey: 'country',
    title: '地区',
    width: 200
  },
  {
    key: 'serverInfo',
    dataKey: 'serverInfo',
    title: '游戏人数',
    width: 200
  },
  {
    key: 'description',
    dataKey: 'description',
    title: '描述',
    width: 300,
    fixed: 'right'
  },
  {
    key: 'detail',
    dataKey: 'detail',
    title: '操作',
    width: 130,
    fixed: 'right'
  }
]);

const loading = ref(false);
const drawer = ref(false);
const detail = ref<{
  rotation: Rotation[];
  players: {
    teamOne: {
      name: string;
      players: Player[];
    };
    teamTwo: {
      name: string;
      players: Player[];
    };
  };
}>({
  rotation: [],
  players: {
    teamOne: {
      name: '',
      players: []
    },
    teamTwo: {
      name: '',
      players: []
    }
  }
});

const searchForm = ref({
  name: 'bfv robot',
  region: 'all',
  platform: 'pc'
});

const tableData = ref<ServersData['servers']>([]);

function searchServers() {
  loading.value = true;
  getServers({
    ...searchForm.value,
    limit: 250,
    lang: 'zh-tw'
  })
    .then((res) => {
      tableData.value = res.servers;
    })
    .finally(() => {
      loading.value = false;
    });
}

function reset() {
  searchForm.value = {
    name: 'bfv robot',
    region: 'all',
    platform: 'pc'
  };
  searchServers();
}

function getDetail(rowData: ServersData['servers'][0]) {
  drawer.value = true;
  getServerDetail({ gameid: rowData.gameId }).then((res) => {
    detail.value.rotation = res.rotation as Rotation[];
  });
  getServerPlayers({ gameid: rowData.gameId }).then((res) => {
    detail.value.players = {
      teamOne: {
        name: res.teams[0].shortName,
        players: res.teams[0].players
      },
      teamTwo: {
        name: res.teams[1].shortName,
        players: res.teams[1].players
      }
    };
  });
}

function searchProfile(row: any) {
  router.push({ path: '/profile', query: { userId: row.user_id } });
}

searchServers();
</script>
