<template>
  <div class="h-screen flex">
    <div class="w-1/2">
      <img :src="getBg" class="object-cover h-full" alt="" />
    </div>
    <div class="w-1/2 flex justify-center items-center">
      <div class="w-[70%]">
        <el-radio-group v-model="gameVersion" class="mb-4">
          <el-radio-button label="Battlefield 1" value="1" />
          <el-radio-button label="Battlefield V" value="5" />
          <!-- <el-radio-button label="Battlefield 2042" value="2042" /> -->
        </el-radio-group>
        <el-input
          v-model="playerName"
          class="mb-4"
          placeholder="请输入玩家名称"
          size="large"
          :suffix-icon="Search"
          @change="(value: string) => searchByName(value)"
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Search, Close } from '@element-plus/icons-vue';
import b1 from '@/assets/b1.jpg';
import b5 from '@/assets/b5.jpg';
import b2042 from '@/assets/b2042.jpg';

const history = ref<{ userName: string; userId: string; avatar: string }[]>([]);
const playerName = ref('');
const router = useRouter();
const gameVersion = ref('1');

const getBg = computed(() => {
  if (gameVersion.value === '1') return b1;
  if (gameVersion.value === '5') return b5;
  if (gameVersion.value === '2042') return b2042;
  return b5;
});

history.value = JSON.parse(localStorage.getItem('players') || '[]');

function searchByName(name: string) {
  router.push({
    path: `/b${gameVersion.value}`,
    query: { name }
  });
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
