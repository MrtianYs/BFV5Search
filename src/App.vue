<template>
  <router-view></router-view>
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
