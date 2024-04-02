<template>
  <div class="h-[calc(100vh_-_100px)] flex justify-center items-center">
    <div class="w-full md:w-[500px] h-[75%]">
      <div class="w-full flex justify-center mb-4">
        <img class="w-full md:w-[350px] rounded-lg" :src="getHeaders" />
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
          :key="item.userId"
          class="flex items-center"
        >
          <el-avatar class="mr-1" :size="20" :src="item.avatar"></el-avatar>
          <el-link class="mr-2" @click="() => searchByName(item.userName)">
            {{ item.userName }}
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
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Search, Close } from '@element-plus/icons-vue';
import Header01 from '@/assets/header01.jpg';
import Header02 from '@/assets/header02.jpg';

const history = ref<{ userName: string; userId: string; avatar: string }[]>([]);
const playerName = ref('');
const router = useRouter();
const headers = [Header01, Header02];

const getHeaders = computed(() => {
  const index = Math.floor(Math.random() * headers.length);
  return headers[index];
});

history.value = JSON.parse(localStorage.getItem('players') || '[]');

function searchByName(name: string) {
  router.push({ path: '/profile', query: { name } });
}

function deleteHistory({ userId }: { userId: string }) {
  const index = history.value.findIndex((item) => item.userId === userId);
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
