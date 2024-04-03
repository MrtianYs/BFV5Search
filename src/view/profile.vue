<template>
  <div class="h-[calc(100vh_-_140px)]">
    <div class="w-full lg:w-[1024px] xl:w-[1280px] m-auto mt-10 mb-10">
      <div class="flex flex-col items-center">
        <el-badge :value="userLevel">
          <el-avatar
            :size="100"
            :src="playerDetail.base.avatar"
            class="mb-4"
          ></el-avatar>
        </el-badge>
        <div class="flex justify-center items-center !mb-3">
          <div class="bg-slate-400 w-7 h-7 rounded-full mr-2">
            <img :src="playerDetail.base.rankImg" class="block w-full h-full" />
          </div>
          <el-text class="!text-[28px] block" type="primary">
            {{ playerDetail.base.userName }}
          </el-text>
        </div>
        <div class="mb-4">
          <el-space>
            <el-tag>等级：{{ playerDetail.base.rank }}</el-tag>
            <el-tag type="info">游戏时间：{{ playTime }}</el-tag>
          </el-space>
        </div>
        <div class="flex items-center">
          <el-space wrap>
            <el-tag :type="userStatus.type">
              BFBan：{{ userStatus.text }}
            </el-tag>
            <el-link
              v-if="isHackerStatus"
              :href="`https://bfban.com/player/${playerDetail.base.id}`"
              type="primary"
              target="_blank"
            >
              BFBan案件
            </el-link>
            <el-link
              type="primary"
              target="_blank"
              :href="`https://battlefieldtracker.com/bfv/profile/origin/${playerDetail.base.userName}/gamereports`"
            >
              对局记录
            </el-link>
          </el-space>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-[1024px] xl:w-[1280px] m-auto flex flex-wrap mb-4">
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>K/D：</el-text>
          <el-text>{{ playerDetail.base.killDeath }}</el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>KPM：</el-text>
          <el-text>{{ playerDetail.base.killsPerMinute }}</el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>SPM：</el-text>
          <el-text>{{ playerDetail.base.scorePerMinute }}</el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>击杀数：</el-text>
          <el-text>{{ playerDetail.base.kills }}</el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>死亡数：</el-text>
          <el-text>{{ playerDetail.base.deaths }}</el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>爆头数：</el-text>
          <el-text>{{ playerDetail.base.headShots }}</el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>爆头射击：</el-text>
          <el-text>{{ playerDetail.base.heals }}</el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>命中率：</el-text>
          <el-text>{{ playerDetail.base.accuracy }}</el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>爆头率：</el-text>
          <el-text>{{ playerDetail.base.headshots }}</el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>场均击杀：</el-text>
          <el-text>
            {{
              (
                (playerDetail.base.kills as number) /
                ((playerDetail.base.wins as number) +
                  (playerDetail.base.loses as number))
              ).toFixed(1)
            }}
          </el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>场均死亡：</el-text>
          <el-text>
            {{
              (
                (playerDetail.base.deaths as number) /
                ((playerDetail.base.wins as number) +
                  (playerDetail.base.loses as number))
              ).toFixed(1)
            }}
          </el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>最远爆头：</el-text>
          <el-text>
            {{ playerDetail.base.longestHeadShot }}
          </el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>最高连杀：</el-text>
          <el-text>
            {{ playerDetail.base.highestKillStreak }}
          </el-text>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-[1024px] xl:w-[1280px] m-auto flex flex-wrap mb-8">
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>最佳兵种：</el-text>
          <el-text>{{ playerDetail.base.bestClass }}</el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>胜场：</el-text>
          <el-text>{{ playerDetail.base.wins }}</el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>败场：</el-text>
          <el-text>{{ playerDetail.base.loses }}</el-text>
        </div>
      </div>
      <div class="w-[50%] sm:w-[33.333%] lg:w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>胜率：</el-text>
          <el-text>{{ playerDetail.base.winPercent }}</el-text>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-[1024px] xl:w-[1280px] px-2 m-auto">
      <el-tabs type="card">
        <el-tab-pane label="武器">
          <el-card
            v-for="(value, key) in getGuns"
            :key="key"
            shadow="hover"
            :header="value[0]?.type"
            class="mb-4"
          >
            <WeaponCard :data="value"></WeaponCard>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="坦克">
          <el-card>
            <VehiclesCard :data="playerDetail.tanks"></VehiclesCard>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="飞机">
          <el-card>
            <VehiclesCard :data="playerDetail.airplane"></VehiclesCard>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="运输载具">
          <el-card>
            <VehiclesCard :data="playerDetail.cars"></VehiclesCard>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="定点">
          <el-card>
            <VehiclesCard :data="playerDetail.fixed"></VehiclesCard>
          </el-card>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ElTag } from 'element-plus';
import dayjs from 'dayjs';
import {
  getPlayerInfo,
  checkBan,
  getVehicles,
  getWeapons
} from '@/api/bfv/index';
import { useRoute } from 'vue-router';
import WeaponCard from '@/components/WeaponCard.vue';
import VehiclesCard from '@/components/VehiclesCard.vue';

const route = useRoute();

const playerDetail = ref<{
  base: Record<string, any>;
  guns: Record<string, any>[];
  tanks: Record<string, any>[];
  airplane: Record<string, any>[];
  cars: Record<string, any>[];
  fixed: Record<string, any>[];
}>({
  base: {},
  guns: [],
  tanks: [],
  airplane: [],
  cars: [],
  fixed: []
});
const isHacker = ref(false);
const isHackerStatus = ref();
const userId = ref('');

const userStatus = computed(() => {
  if (isHackerStatus.value === 5) return { type: 'warning', text: '处理中' };
  if (isHackerStatus.value === 6)
    return { type: 'warning', text: '管理投票中' };
  if (isHackerStatus.value === 1) return { type: 'danger', text: '石锤' };
  if (isHackerStatus.value === 2) return { type: 'warning', text: '待自证' };
  if (isHackerStatus.value === 3) return { type: 'success', text: 'Moss自证' };
  if (isHackerStatus.value === 4) return { type: 'warning', text: '举报无效' };
  if (isHackerStatus.value === 8) return { type: 'primary', text: '刷枪' };
  return { type: 'success', text: '绿色玩家' } as {
    type: any;
    text: string;
  };
});

const playTime = computed(() => {
  if (playerDetail.value.base.timePlayed) {
    const time = playerDetail.value.base.timePlayed.split(',');
    if (time.length === 1) {
      const hour = dayjs(`1970-01-01${time[0]}`).hour();
      return `${hour}小时`;
    } else {
      const day = parseInt(time[0]);
      const hour = dayjs(`1970-01-01${time[1]}`).hour();
      return `${day * 24 + hour}小时`;
    }
  }
  return '';
});

const userLevel = computed(() => {
  const { killDeath, killsPerMinute } = playerDetail.value.base;
  if (isHacker.value) return '挂壁';
  if (typeof killDeath === 'number' && typeof killsPerMinute === 'number') {
    if (killsPerMinute >= 2 || killDeath >= 3) return 'FPS天才';
    if (killsPerMinute > 1.4 || killDeath >= 2) return 'Pro哥';
    if (killsPerMinute >= 1 && killsPerMinute <= 1.4) return '普通玩家';
    if (killDeath >= 1 && killDeath <= 2) return '普通玩家';
    if (killsPerMinute < 1 && killDeath < 1) return 'NOOB';
  }
  return '查询中';
});

const assaultRifle = computed(() => filterGun('突击步枪'));
const semiAutomaticRifle = computed(() => filterGun('半自动步枪'));
const submachineGun = computed(() => filterGun('冲锋枪'));
const lightMachineGun = computed(() => filterGun('轻机枪'));
const shotgun = computed(() => filterGun('霰弹枪'));
const singleActionRifle = computed(() => filterGun('单动式步枪'));
const manualActionCarbine = computed(() => filterGun('手动枪机卡宾枪'));
const pistolCarbine = computed(() => filterGun('手枪型卡宾枪'));
const selfLoadingRifle = computed(() => filterGun('自动装填步枪'));
const fixedMachineGun = computed(() => filterGun('固定式机枪'));
const secondaryWeapon = computed(() => filterGun('副武器'));
const melee = computed(() => filterGun('近战'));
const equipped = computed(() => filterGun('配备'));

const getGuns = computed(() => ({
  assaultRifle: assaultRifle.value,
  semiAutomaticRifle: semiAutomaticRifle.value,
  selfLoadingRifle: selfLoadingRifle.value,
  submachineGun: submachineGun.value,
  lightMachineGun: lightMachineGun.value,
  shotgun: shotgun.value,
  singleActionRifle: singleActionRifle.value,
  manualActionCarbine: manualActionCarbine.value,
  pistolCarbine: pistolCarbine.value,
  secondaryWeapon: secondaryWeapon.value,
  fixedMachineGun: fixedMachineGun.value,
  melee: melee.value,
  equipped: equipped.value
}));

function filterGun(type: string) {
  return playerDetail.value.guns
    .filter((item) => item.type === type)
    .sort((a, b) => b.killsPerMinute - a.killsPerMinute);
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
  const history = JSON.parse(localStorage.getItem('players') || '[]') as {
    userName: string;
    userId: string;
    avatar: string;
  }[];
  const isExist = history.findIndex((item) => item.userId === userId);
  if (isExist < 0) {
    history.push({
      userName,
      userId,
      avatar
    });
    localStorage.setItem('players', JSON.stringify(history));
  }
}

function searchByName(name: string) {
  getPlayerInfo({
    name
  }).then((res) => {
    userId.value = res.userId;
    setData(res);
    getWeapons({ name }).then((res) => {
      playerDetail.value.guns = res.weapons;
    });

    getVehicles({ name }).then((res) => {
      res.vehicles.map((item: any) => {
        if (item.type === '飞机') playerDetail.value.airplane.push(item);
        if (item.type === '坦克') playerDetail.value.tanks.push(item);
        if (item.type === '运输载具') playerDetail.value.cars.push(item);
        if (item.type === '定点') playerDetail.value.fixed.push(item);
      });
      playerDetail.value.airplane.sort(
        (a, b) => b.killsPerMinute - a.killsPerMinute
      );
      playerDetail.value.tanks.sort(
        (a, b) => b.killsPerMinute - a.killsPerMinute
      );
      playerDetail.value.cars.sort(
        (a, b) => b.killsPerMinute - a.killsPerMinute
      );
      playerDetail.value.fixed.sort(
        (a, b) => b.killsPerMinute - a.killsPerMinute
      );
    });

    checkBan({ userIds: res.userId }).then((res) => {
      isHacker.value = res.userids[userId.value].hacker;
      isHackerStatus.value = res.userids[userId.value].status;
    });
  });
}

function setData(res: any) {
  setHistory(res);
  playerDetail.value.base = res;
}

searchByName(route.query.name as string);
</script>
