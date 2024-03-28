<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
    router
  >
    <el-menu-item>
      <img class="w-32" src="@/assets/logo.png" alt="" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/search">战绩查询</el-menu-item>
    <el-menu-item index="/servers">服务器查询</el-menu-item>
  </el-menu>
  <div class="p-4">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import { useRouter } from 'vue-router';

const activeIndex = ref('');
const router = useRouter();

router.isReady().then(() => {
  activeIndex.value = router.currentRoute.value.path;
});

watch(
  () => router.currentRoute.value,
  () => {
    activeIndex.value = router.currentRoute.value.path;
  }
);

provide('root', {
  setMenuActive(value: string) {
    activeIndex.value = value;
  }
});
</script>
