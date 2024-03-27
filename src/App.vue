<template>
  <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0"></el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">战绩查询</el-menu-item>
    <el-menu-item index="2">服务器查询</el-menu-item>
  </el-menu>
  <div class="p-4">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';

const activeIndex = ref('2');

provide('root', {
  setMenuActive(value) {
    activeIndex.value = value;
  }
});
</script>
