<template>
  <div
    v-for="gun in data"
    :key="gun.weaponName"
    class="rounded-lg w-full mb-2 p-4 bg-slate-50"
  >
    <el-space>
      <el-text type="info">
        <el-icon class="mr-2"><Aim /></el-icon>{{ gun.weaponName }}
      </el-text>
      <el-tag type="warning">
        <div class="flex items-center">
          <el-icon class="mr-1" size="small" color="#ed5a04">
            <TrophyBase />
          </el-icon>
          {{ Math.floor(gun.kills / 100) }}
        </div>
      </el-tag>
      <el-tag> {{ Math.floor(gun.timeEquipped / 60 / 60) }} 小时 </el-tag>
    </el-space>
    <div class="mt-2">
      <el-space wrap>
        <el-tag type="info"> KPM：{{ gun.killsPerMinute }} </el-tag>
        <el-tag type="info"> 击杀：{{ gun.kills }} </el-tag>
        <el-tag type="info"> 爆头击杀：{{ gun.headshotKills }} </el-tag>
        <el-tag type="info">命中率：{{ gun.accuracy }} </el-tag>
        <el-tag type="info">爆头率：{{ gun.headshots }} </el-tag>
        <el-tag type="info">射击：{{ gun.shotsFired }} </el-tag>
        <el-tag type="info">效率：{{ gun.hitVKills }} </el-tag>
      </el-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { TrophyBase, Aim } from '@element-plus/icons-vue';
defineProps({
  data: Array as PropType<Record<string, any>[]>
});
</script>
