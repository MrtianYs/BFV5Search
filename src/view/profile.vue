<template>
  <div
    v-if="!showDetail"
    class="h-[calc(100vh_-_100px)] flex justify-center items-center"
  >
    <div class="w-[500px] h-[75%]">
      <div class="flex justify-center mb-4">
        <img class="w-[350px] rounded-lg" src="@/assets/header.jpg" alt="" />
      </div>
      <el-input
        v-model="playerName"
        class="mb-4"
        placeholder="请输入玩家名称"
        size="large"
        :suffix-icon="Search"
        @change="(value) => searchByName(value)"
      ></el-input>

      <el-space v-if="history.length" wrap>
        <div
          v-for="item in history"
          :key="item.playerOid"
          class="flex items-center"
        >
          <el-avatar class="mr-1" :size="20" :src="item.avatar"></el-avatar>
          <el-link class="mr-2" @click="() => searchByName(item.playerName)">
            {{ item.playerName }}
          </el-link>
          <el-icon
            class="cursor-pointer"
            size="12"
            @click="deleteHistory(item)"
          >
            <Close />
          </el-icon>
        </div>
        <el-button size="small" text type="primary" @click="clearHistory">
          清空
        </el-button>
      </el-space>
    </div>
  </div>
  <div v-else class="h-[calc(100vh_-_100px)]">
    <div class="w-[600px] m-auto mt-10">
      <div class="flex flex-col items-center">
        <el-avatar
          :size="100"
          :src="playerDetail.base.avatar"
          class="mb-4"
        ></el-avatar>
        <el-text class="!text-[28px] block !mb-3" type="primary">
          {{ playerDetail.base.userName }}
        </el-text>
        <div class>
          <el-space>
            <el-tag>等级：{{ playerDetail.base.rank }}</el-tag>
            <el-tag type="info">游戏时间：{{ playTime }}</el-tag>
          </el-space>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { Search, Close } from '@element-plus/icons-vue';
import { getPlayerInfo } from '@/api/bfv/index';
import dayjs from 'dayjs';

const history = ref<
  { playerName: string; playerOid: string; avatar: string }[]
>([]);
const playerName = ref('');
const showDetail = ref(false);
const playerDetail = ref<{ base: Record<string, string> }>({
  base: {}
});
const isHacker = ref(false);
const route = useRoute();

history.value = JSON.parse(localStorage.getItem('players') || '[]');

// const userLevel = computed(() => {
//   if (isHacker.value) return { bg: 'red', text: '石锤挂壁' };
// });

const playTime = computed(() => {
  const time = playerDetail.value.base.timePlayed.split(',');
  const day = parseInt(time[0]);
  const hour = dayjs(`1970-01-01${time[1]}`).hour();
  return `${day * 24 + hour}小时`;
});

function searchByName(name: string) {
  getPlayerInfo({
    name
  }).then((res) => {
    setData(res);
  });
}

function setData(res: any) {
  setHistory(res);
  playerDetail.value.base = res;
  playerName.value = '';
  showDetail.value = true;
}

function setHistory({
  userName,
  userId,
  avatar
}: {
  userName: string;
  userId: string;
  avatar: string;
}) {
  const isExist = history.value.findIndex((item) => item.playerOid === userId);
  if (isExist < 0) {
    history.value.push({
      playerName: userName,
      playerOid: userId,
      avatar
    });
    localStorage.setItem('players', JSON.stringify(history.value));
  }
}

function deleteHistory({ playerOid }: { playerOid: string }) {
  const index = history.value.findIndex((item) => item.playerOid === playerOid);
  if (index > -1) {
    history.value.splice(index, 1);
    localStorage.setItem('players', JSON.stringify(history.value));
  }
}

function clearHistory() {
  history.value = [];
  localStorage.removeItem('players');
}
</script>
