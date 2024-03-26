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
          </template>
        </el-table-v2>
      </template>
    </el-auto-resizer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { map, mode } from '@/const/enums';
import { getServers, ServersData } from '@/api/bfv/index';

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
  }
]);

const loading = ref(false);

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
    lang: ''
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

searchServers();
</script>
