<template>
  <div>index</div>
</template>

<script setup lang="ts">
import { getServers } from '@/api/bfv/index';

getServers({
  name: 'bfv robot',
  region: 'Asia',
  platform: 'pc',
  limit: 250
}).then((res) => {
  console.log(res);
});
</script>
