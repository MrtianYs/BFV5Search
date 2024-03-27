<template>
  <div class="h-[calc(100vh_-_140px)]">
    <div class="w-[600px] m-auto mt-10 mb-10">
      <div class="flex flex-col items-center">
        <el-avatar
          :size="100"
          :src="playerDetail.base.avatar"
          class="mb-4"
        ></el-avatar>
        <div class="flex justify-center items-center !mb-3">
          <div class="bg-slate-400 w-8 h-8 rounded-full mr-2">
            <img
              :src="playerDetail.base.rankImg"
              class="block w0-full h-full"
              alt=""
            />
          </div>
          <el-text class="!text-[28px] block" type="primary">
            {{ playerDetail.base.userName }}
          </el-text>
        </div>
        <div class>
          <el-space>
            <el-tag>等级：{{ playerDetail.base.rank }}</el-tag>
            <el-tag type="info">游戏时间：{{ playTime }}</el-tag>
            <el-tag :type="userLevel.type">BFBan：{{ userLevel.text }}</el-tag>
          </el-space>
        </div>
      </div>
    </div>
    <div class="w-[800px] m-auto flex flex-wrap mb-4">
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>K/D：</el-text>
          <el-text>{{ playerDetail.base.killDeath }}</el-text>
        </div>
      </div>
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>KPM：</el-text>
          <el-text>{{ playerDetail.base.killsPerMinute }}</el-text>
        </div>
      </div>
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>SPM：</el-text>
          <el-text>{{ playerDetail.base.scorePerMinute }}</el-text>
        </div>
      </div>
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>击杀数：</el-text>
          <el-text>{{ playerDetail.base.kills }}</el-text>
        </div>
      </div>
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>死亡数：</el-text>
          <el-text>{{ playerDetail.base.deaths }}</el-text>
        </div>
      </div>
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>爆头数：</el-text>
          <el-text>{{ playerDetail.base.headShots }}</el-text>
        </div>
      </div>
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>爆头射击数：</el-text>
          <el-text>{{ playerDetail.base.heals }}</el-text>
        </div>
      </div>
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>命中率：</el-text>
          <el-text>{{ playerDetail.base.accuracy }}</el-text>
        </div>
      </div>
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>爆头率：</el-text>
          <el-text>{{ playerDetail.base.headshots }}</el-text>
        </div>
      </div>
      <div class="w-[25%] p-2">
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
      <div class="w-[25%] p-2">
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
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>最远爆头：</el-text>
          <el-text>
            {{ playerDetail.base.longestHeadShot }}
          </el-text>
        </div>
      </div>
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>最高连杀：</el-text>
          <el-text>
            {{ playerDetail.base.highestKillStreak }}
          </el-text>
        </div>
      </div>
    </div>
    <div class="w-[800px] m-auto flex flex-wrap">
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>最佳兵种：</el-text>
          <el-text>{{ playerDetail.base.bestClass }}</el-text>
        </div>
      </div>
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>胜场：</el-text>
          <el-text>{{ playerDetail.base.wins }}</el-text>
        </div>
      </div>
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>败场：</el-text>
          <el-text>{{ playerDetail.base.loses }}</el-text>
        </div>
      </div>
      <div class="w-[25%] p-2">
        <div class="py-2 px-4 bg-slate-100 rounded-lg">
          <el-text>胜率：</el-text>
          <el-text>{{ playerDetail.base.winPercent }}</el-text>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ElTag } from 'element-plus';
import dayjs from 'dayjs';
import { getPlayerInfo, checkBan } from '@/api/bfv/index';
import { useRoute } from 'vue-router';

const route = useRoute();

const playerDetail = ref<{ base: Record<string, string | number> }>({
  base: {}
});
const isHacker = ref(false);
const isHackerStatus = ref();

const userLevel = computed(() => {
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
    setData(res);
  });

  checkBan({ names: name }).then((res) => {
    isHacker.value = res.names[name.toLocaleLowerCase()].hacker;
    isHackerStatus.value = res.names[name.toLocaleLowerCase()].status;
  });
}

function setData(res: any) {
  setHistory(res);
  playerDetail.value.base = res;
}

searchByName(route.query.name as string);
</script>
