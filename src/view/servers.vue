<template>
  <el-form inline :model="searchForm">
    <el-form-item
      label="服务器名"
      class="w-[200px] lg:w-[300px]"
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
  <div
    v-loading="loading"
    class="h-[calc(100vh_-_250px)] md:h-[calc(100vh_-_150px)]"
  >
    <DynamicScroller
      keyField="gameId"
      :items="tableData"
      :min-item-size="54"
      class="h-full"
    >
      <template #default="{ item, index, active }">
        <DynamicScrollerItem
          :item="item"
          :active="active"
          :size-dependencies="[item.description]"
          :data-index="index"
        >
          <div class="py-1" @click="getDetail(item)">
            <div class="p-2 rounded-lg bg-slate-100">
              <div class="flex">
                <div
                  class="w-20 md:w-44 flex-shrink-0 rounded-lg overflow-hidden"
                >
                  <img class="w-full h-full object-cover" :src="item.url" />
                </div>
                <div class="ml-2">
                  <div class="mb-2">
                    <el-text class="md:!text-[18px]">{{ item.prefix }}</el-text>
                  </div>
                  <el-space wrap>
                    <el-tag>{{ item.mode }}</el-tag>
                    <el-tag>{{ item.serverInfo }}</el-tag>
                    <el-tag>{{ item.currentMap }}</el-tag>
                    <el-tag>{{ item.country }} - {{ item.region }}</el-tag>
                  </el-space>
                  <div v-if="item.description" class="md:block mt-2">
                    <el-text>{{ item.description }}</el-text>
                  </div>
                </div>
              </div>
              <div v-if="item.description" class="md:hidden mt-2">
                <el-text>{{ item.description }}</el-text>
              </div>
            </div>
          </div>
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
  </div>

  <el-drawer
    v-model="drawer"
    append-to-body
    title="服务器详情"
    :size="isMobile ? '100%' : '80%'"
    direction="rtl"
  >
    <div class="mb-3 text-sm md:text-xl">地图循环</div>
    <div class="mb-4 flex flex-wrap -m-2">
      <div
        v-for="item in detail.rotation"
        :key="item.index"
        class="w-[50%] md:w-[33.333%] lg:w-[25%] p-2"
      >
        <div>
          <img :src="item.image" class="w-full rounded mb-2" />
          <div class="flex justify-between">
            <span class="text-[14px]">{{ item.mapname }}</span>
            <span class="text-[14px]">{{ item.mode }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3 text-sm md:text-xl">玩家</div>

    <div class="flex flex-wrap xl:flex-nowrap">
      <div class="w-[100%] xl:w-[50%] lg:mr-4 mb-2 xl:mb-0">
        <el-tag size="large" class="mb-2">
          {{ detail.players.teamOne.name }}
        </el-tag>
        <el-table border :data="detail.players.teamOne.players">
          <el-table-column prop="name" label="玩家名称">
            <template #default="{ row }">
              <el-link type="primary" @click="searchProfile(row)">
                {{ row.name }}
              </el-link>
            </template>
          </el-table-column>
          <el-table-column prop="latency" label="延迟">
            <template #default="{ row }"> {{ row.latency }}ms </template>
          </el-table-column>
          <el-table-column prop="slot" label="加入时间">
            <template #default="{ row }">
              {{ dayjs(row['join_time'] / 1000).format('HH:mm:ss') }}
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="w-[100%] xl:w-[50%]">
        <el-tag size="large" class="mb-2">
          {{ detail.players.teamTwo.name }}
        </el-tag>
        <el-table border :data="detail.players.teamTwo.players">
          <el-table-column prop="name" label="玩家名称">
            <template #default="{ row }">
              <el-link type="primary" @click="searchProfile(row)">
                {{ row.name }}
              </el-link>
            </template>
          </el-table-column>
          <el-table-column prop="latency" label="延迟">
            <template #default="{ row }"> {{ row.latency }}ms </template>
          </el-table-column>
          <el-table-column prop="slot" label="加入时间">
            <template #default="{ row }">
              {{ dayjs(row['join_time'] / 1000).format('HH:mm:ss') }}
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
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
import { isMobile } from '@tenrok/vue-device-detect';

const router = useRouter();

const root = inject<{
  setMenuActive: (path: string) => void;
}>('root');

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
  region: 'asia',
  platform: 'pc'
});

const tableData = ref<ServersData['servers']>([]);

function searchServers() {
  loading.value = true;
  getServers({
    ...searchForm.value,
    limit: 250,
    lang: 'zh-cn'
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
    region: 'asia',
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
  root?.setMenuActive('/profile');
  router.push({ path: '/profile', query: { name: row.name } });
}

searchServers();
</script>
