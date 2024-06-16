<template>
  <el-form inline :model="searchForm">
    <el-form-item
      label="服务器名"
      class="w-[200px] lg:w-[300px]"
      :rules="[{ required: true, message: '请填写服务器名' }]"
      prop="name"
    >
      <el-input v-model="searchForm.name"></el-input>
    </el-form-item>
    <el-form-item label="地区" class="w-[120px]">
      <el-select v-model="searchForm.region" clearable>
        <el-option label="全部" value="all"></el-option>
        <el-option label="亚洲" value="asia"></el-option>
        <el-option label="欧洲" value="eu"></el-option>
        <el-option label="北美" value="nam"></el-option>
        <el-option label="南美" value="sam"></el-option>
        <el-option label="澳大利亚" value="au"></el-option>
        <el-option label="奥希阿纳" value="oc"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="平台" class="w-[120px]">
      <el-select v-model="searchForm.platform" clearable>
        <el-option label="PC" value="pc"></el-option>
        <el-option label="XBOX" value="xboxone"></el-option>
        <el-option label="PS4" value="ps4"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="searchServers">搜索</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
  <div
    v-loading="loading"
    class="h-[calc(100vh_-_250px)] md:h-[calc(100vh_-_150px)]"
  >
    <DynamicScroller
      keyField="gameId"
      :items="tableData"
      :min-item-size="54"
      class="h-full"
    >
      <template #default="{ item, index, active }">
        <DynamicScrollerItem
          :item="item"
          :active="active"
          :size-dependencies="[item.description]"
          :data-index="index"
        >
          <div class="py-1" @click="getDetail(item)">
            <div class="p-2 rounded-lg bg-slate-100">
              <div class="flex">
                <div
                  class="w-20 md:w-44 flex-shrink-0 rounded-lg overflow-hidden"
                >
                  <img class="w-full h-full object-cover" :src="item.url" />
                </div>
                <div class="ml-2">
                  <div class="mb-2">
                    <el-text class="md:!text-[18px]">{{ item.prefix }}</el-text>
                  </div>
                  <el-space wrap>
                    <el-tag>{{ item.currentMap }}</el-tag>
                    <el-tag>{{ item.mode }}</el-tag>
                    <el-tag>{{ item.serverInfo }}</el-tag>
                    <el-tag>排队：{{ item.inQue }}</el-tag>
                    <el-tag>观战：{{ item.inSpectator }}</el-tag>
                    <el-tag>{{ item.country }} - {{ item.region }}</el-tag>
                  </el-space>
                  <div v-if="item.description" class="hidden md:block mt-2">
                    <el-text>{{ item.description }}</el-text>
                  </div>
                </div>
              </div>
              <div v-if="item.description" class="md:hidden mt-2">
                <el-text>{{ item.description }}</el-text>
              </div>
            </div>
          </div>
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
  </div>

  <el-drawer
    v-model="drawer"
    append-to-body
    title="服务器详情"
    :size="isMobile ? '100%' : '80%'"
    direction="rtl"
  >
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="地图" name="map">
        <div class="my-6">
          <div class="mb-3 text-sm md:text-xl">服主信息</div>
          <div class="flex items-center">
            <img
              class="w-8 h-8 rounded-full mr-2"
              :src="detail.owner.avatar"
              alt=""
            />
            <div class="mr-4">{{ detail.owner.userName }}</div>
            <el-tag class="mr-4">等级：{{ detail.owner.rank }}</el-tag>
            <el-tag :type="detail.owner.status ? 'error' : 'success'">
              BFBan：{{ detail.owner.status ? '石锤' : '绿玩' }}
            </el-tag>
          </div>
        </div>

        <div class="mb-6">
          <div class="mb-3 text-sm md:text-xl">当前地图</div>
          <div class="flex flex-wrap -m-2">
            <div
              class="w-[50%] md:w-[33.333%] lg:w-[25%] 2xl:w-[calc(100%/6)] p-2"
            >
              <div class="relative">
                <img :src="detail.current.image" class="w-full rounded" />
                <div
                  class="absolute w-full flex justify-between items-end bottom-0 bg-slate-200 bg-opacity-20 px-3 py-2 text-white"
                >
                  <span class="text-[14px] md:text-[16px]">
                    {{ detail.current.mapname }}
                  </span>
                  <span class="text-[12px] md:text-[14px]">
                    {{ detail.current.mode }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-6">
          <div class="mb-3 text-sm md:text-xl">地图循环</div>
          <div class="flex flex-wrap -m-2">
            <div
              v-for="item in detail.rotation"
              :key="item.index"
              class="w-[50%] md:w-[33.333%] lg:w-[25%] 2xl:w-[calc(100%/6)] p-2"
            >
              <div class="relative">
                <img :src="item.image" class="w-full rounded" />
                <div
                  class="absolute w-full flex justify-between items-end bottom-0 bg-slate-200 bg-opacity-20 px-3 py-2 text-white"
                >
                  <span class="text-[14px] md:text-[16px]">{{
                    item.mapname
                  }}</span>
                  <span class="text-[12px] md:text-[14px]">{{
                    item.mode
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="服务器设置" name="settings">
        <div class="my-6">
          <el-row :gutter="16">
            <el-col :xs="24" :sm="8" :xl="4">
              <el-card class="h-auto sm:h-[519px] mb-4" shadow="hover">
                <template #header>
                  <span>兵种</span>
                </template>
                <div class="mb-2">
                  突击兵：{{ detail.settings.classes?.EnableAssaultKit }}
                </div>
                <div class="mb-2">
                  医疗兵：{{ detail.settings.classes?.EnableMedicKit }}
                </div>
                <div class="mb-2">
                  支援兵：{{ detail.settings.classes?.EnableSupportKit }}
                </div>
                <div class="mb-2">
                  侦察兵：{{ detail.settings.classes?.EnableScoutKit }}
                </div>
              </el-card>
            </el-col>
            <el-col :xs="24" :sm="8" :xl="4">
              <el-card class="h-auto sm:h-[519px] mb-4" shadow="hover">
                <template #header>
                  <span>规则</span>
                </template>
                <div class="mb-2">
                  兵力值：{{ detail.settings.rules?.TicketCountScale + '%' }}
                </div>
                <div class="mb-2">
                  回合时间：{{ detail.settings.rules?.RoundTimeLimit + '%' }}
                </div>
                <div class="mb-2">
                  士兵重生时间：{{
                    detail.settings.rules?.SetSoldierRespawnTimeScale + '%'
                  }}
                </div>
                <div class="mb-2">
                  子弹伤害：{{
                    detail.settings.rules?.SetBulletDamageScale + '%'
                  }}
                </div>
                <div class="mb-2">
                  重新装填整个弹夹：{{
                    detail.settings.rules?.EnableForceReloadWholeMags
                  }}
                </div>
                <div class="mb-2">
                  生命值回复：{{
                    detail.settings.rules?.EnableRegenerateHealth
                  }}
                </div>
                <div class="mb-2">
                  仅限小队队长重生：{{
                    detail.settings.rules?.Squad_EnableOnlySquadLeaderSpawn
                  }}
                </div>
                <div class="mb-2">
                  友军误伤：{{ detail.settings.rules?.EnableFriendlyFire }}
                </div>
              </el-card>
            </el-col>
            <el-col :xs="24" :sm="8" :xl="4">
              <el-card class="h-auto sm:h-[519px] mb-4" shadow="hover">
                <template #header>
                  <span>载具</span>
                </template>
                <div class="mb-2">
                  载具重生时间：{{
                    detail.settings.vehicles?.SetVehicleRespawnTimeScale + '%'
                  }}
                </div>
                <div class="mb-2">
                  载具第三人称视角：{{
                    detail.settings.vehicles?.Enable3pVehicleCamera
                  }}
                </div>
                <div class="mb-2">
                  空中载具：{{
                    detail.settings.vehicles?.Vehicle_AllowCombatAir
                  }}
                </div>
                <div class="mb-2">
                  地面载具：{{
                    detail.settings.vehicles?.Vehicle_AllowCombatLand
                  }}
                </div>
                <div class="mb-2">
                  地面运输载具：{{
                    detail.settings.vehicles?.Vehicle_AllowTransportLand
                  }}
                </div>
                <div class="mb-2">
                  水上运输载具：{{
                    detail.settings.vehicles?.Vehicle_AllowTransportSea
                  }}
                </div>
                <div class="mb-2">
                  水上战斗载具：{{
                    detail.settings.vehicles?.Vehicle_AllowCombatSea
                  }}
                </div>
              </el-card>
            </el-col>
            <el-col :xs="24" :sm="8" :xl="4">
              <el-card class="h-auto sm:h-[519px] mb-4" shadow="hover">
                <template #header>
                  <span>武器</span>
                </template>
                <div class="mb-2">
                  近战：{{ detail.settings.weapons?.EnableMeleeWeapons }}
                </div>
                <div class="mb-2">
                  手枪：{{ detail.settings.weapons?.EnableHandguns }}
                </div>
                <div class="mb-2">
                  突击步枪：{{ detail.settings.weapons?.EnableAssaultRifles }}
                </div>
                <div class="mb-2">
                  半自动步枪：{{
                    detail.settings.weapons?.EnableSemiAutoRifles
                  }}
                </div>
                <div class="mb-2">
                  冲锋枪：{{ detail.settings.weapons?.EnableSubmachineGuns }}
                </div>
                <div class="mb-2">
                  手动枪卡宾机枪：{{
                    detail.settings.weapons?.EnableBoltActionCarbines
                  }}
                </div>
                <div class="mb-2">
                  轻机枪：{{ detail.settings.weapons?.EnableLightMachineGuns }}
                </div>
                <div class="mb-2">
                  霰弹枪：{{ detail.settings.weapons?.EnableShotguns }}
                </div>
                <div class="mb-2">
                  固定式机枪：{{
                    detail.settings.weapons?.EnableMediumMachineGuns
                  }}
                </div>
                <div class="mb-2">
                  手动机枪步枪：{{
                    detail.settings.weapons?.EnableSingleActionRifles
                  }}
                </div>
                <div class="mb-2">
                  自动装填步枪：{{
                    detail.settings.weapons?.EnableSelfLoadingRifles
                  }}
                </div>
                <div class="mb-2">
                  反器材步枪：{{
                    detail.settings.weapons?.EnableAntiMaterielRifles
                  }}
                </div>
                <div class="mb-2">
                  手枪卡宾枪：{{
                    detail.settings.weapons?.EnablePistolCarbines
                  }}
                </div>
              </el-card>
            </el-col>
            <el-col :xs="24" :sm="8" :xl="4">
              <el-card class="h-auto sm:h-[519px] mb-4" shadow="hover">
                <template #header>
                  <span>其他</span>
                </template>
                <div class="mb-2">
                  自旋辅助瞄准：{{
                    detail.settings.miscellaneous?.EnableAimAssistRotation
                  }}
                </div>
                <div class="mb-2">
                  瞄准辅助减速：{{
                    detail.settings.miscellaneous?.EnableAimAssistSlowdown
                  }}
                </div>
                <div class="mb-2">
                  名牌：{{ detail.settings.miscellaneous?.EnableNametags }}
                </div>
                <div class="mb-2">
                  迷你地图：{{ detail.settings.miscellaneous?.EnableMinimap }}
                </div>
                <div class="mb-2">
                  指南针：{{ detail.settings.miscellaneous?.EnableCompass }}
                </div>
                <div class="mb-2">
                  击杀镜头：{{ detail.settings.miscellaneous?.EnableKillCam }}
                </div>
                <div class="mb-2">
                  抬头显示：{{ detail.settings.miscellaneous?.EnableHUD }}
                </div>
              </el-card>
            </el-col>
            <el-col :xs="24" :sm="8" :xl="4">
              <el-card class="h-auto sm:h-[519px] mb-4" shadow="hover">
                <template #header>
                  <span>配备</span>
                </template>
                <div class="mb-2">
                  反载具发射器：{{
                    detail.settings.gadgets?.EnableAntiVehicleLaunchers
                  }}
                </div>
                <div class="mb-2">
                  反步兵发射器：{{
                    detail.settings.gadgets?.EnableAntiInfantryLaunchers
                  }}
                </div>
                <div class="mb-2">
                  弹药补给配给：{{
                    detail.settings.gadgets?.EnableAmmoSupplyGadgets
                  }}
                </div>
                <div class="mb-2">
                  自我治疗：{{ detail.settings.gadgets?.EnableSelfHealGadgets }}
                </div>
                <div class="mb-2">
                  手榴弹：{{ detail.settings.gadgets?.EnableHandGranades }}
                </div>
                <div class="mb-2">
                  建筑工具：{{ detail.settings.gadgets?.EnableBuildTools }}
                </div>
                <div class="mb-2">
                  增援装置：{{
                    detail.settings.gadgets?.EnableReinforcementGadget
                  }}
                </div>
                <div class="mb-2">
                  炸药：{{ detail.settings.gadgets?.Gadgets_EnableExplosives }}
                </div>
                <div class="mb-2">
                  其他：{{ detail.settings.gadgets?.Gadgets_EnableGadgets }}
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>

      <el-tab-pane label="玩家" name="player">
        <div class="my-6">
          <el-tabs v-model="playActive" class="play-tab" type="border-card">
            <el-tab-pane :label="detail.players.teamOne.name" name="1">
              <el-table :data="detail.players.teamOne.players">
                <el-table-column prop="name" label="玩家名称">
                  <template #default="{ row }">
                    <el-link type="primary" @click="searchProfile(row)">
                      {{ row.name }}
                    </el-link>
                  </template>
                </el-table-column>
                <el-table-column label="BFBan状态">
                  <template #default="{ row }">
                    <el-tag :type="row.status.type">
                      {{ row.status.text }}
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="等级">
                  <template #default="{ row }">
                    <div class="flex items-center">
                      <div
                        class="w-6 h-6 flex justify-center items-center rounded-full bg-slate-600 mr-2"
                      >
                        <img
                          :src="
                            row.rank.imageUrl.replace(
                              /\[.+?\]/g,
                              'https://eaassets-a.akamaihd.net/battlelog/battlebinary'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <span>{{ row.rank.number }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="kd" label="生涯kd"></el-table-column>
                <el-table-column prop="kpm" label="生涯kpm"></el-table-column>
                <el-table-column prop="spm" label="生涯spm"></el-table-column>
                <el-table-column prop="latency" label="延迟">
                  <template #default="{ row }"> {{ row.latency }}ms </template>
                </el-table-column>
                <el-table-column prop="slot" label="加入时间">
                  <template #default="{ row }">
                    {{ dayjs(row['join_time'] / 1000).format('HH:mm:ss') }}
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="detail.players.teamTwo.name" name="2">
              <el-table :data="detail.players.teamTwo.players">
                <el-table-column prop="name" label="玩家名称">
                  <template #default="{ row }">
                    <el-link type="primary" @click="searchProfile(row)">
                      {{ row.name }}
                    </el-link>
                  </template>
                </el-table-column>
                <el-table-column label="BFBan状态">
                  <template #default="{ row }">
                    <el-tag :type="row.status.type">
                      {{ row.status.text }}
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="等级">
                  <template #default="{ row }">
                    <div class="flex items-center">
                      <div
                        class="w-6 h-6 flex justify-center items-center rounded-full bg-slate-600 mr-2"
                      >
                        <img
                          :src="
                            row.rank.imageUrl.replace(
                              /\[.+?\]/g,
                              'https://eaassets-a.akamaihd.net/battlelog/battlebinary'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <span>{{ row.rank.number }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="kd" label="生涯kd"></el-table-column>
                <el-table-column prop="kpm" label="生涯kpm"></el-table-column>
                <el-table-column prop="spm" label="生涯spm"></el-table-column>
                <el-table-column prop="latency" label="延迟">
                  <template #default="{ row }"> {{ row.latency }}ms </template>
                </el-table-column>
                <el-table-column prop="slot" label="加入时间">
                  <template #default="{ row }">
                    {{ dayjs(row['join_time'] / 1000).format('HH:mm:ss') }}
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="排队" name="3">
              <el-table :data="detail.players.queue">
                <el-table-column prop="name" label="玩家名称">
                  <template #default="{ row }">
                    <el-link type="primary" @click="searchProfile(row)">
                      {{ row.name }}
                    </el-link>
                  </template>
                </el-table-column>
                <el-table-column label="BFBan状态">
                  <template #default="{ row }">
                    <el-tag :type="row.status.type">
                      {{ row.status.text }}
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="等级">
                  <template #default="{ row }">
                    <div class="flex items-center">
                      <div
                        class="w-6 h-6 flex justify-center items-center rounded-full bg-slate-600 mr-2"
                      >
                        <img
                          :src="
                            row.rank.imageUrl.replace(
                              /\[.+?\]/g,
                              'https://eaassets-a.akamaihd.net/battlelog/battlebinary'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <span>{{ row.rank.number }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="kd" label="生涯kd"></el-table-column>
                <el-table-column prop="kpm" label="生涯kpm"></el-table-column>
                <el-table-column prop="spm" label="生涯spm"></el-table-column>
                <el-table-column prop="latency" label="延迟">
                  <template #default="{ row }"> {{ row.ping }}ms </template>
                </el-table-column>
                <el-table-column prop="slot" label="加入时间">
                  <template #default="{ row }">
                    {{ dayjs(row['join'] / 1000).format('HH:mm:ss') }}
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="观战" name="4">
              <el-table :data="detail.players.spectators">
                <el-table-column prop="name" label="玩家名称">
                  <template #default="{ row }">
                    <el-link type="primary" @click="searchProfile(row)">
                      {{ row.name }}
                    </el-link>
                  </template>
                </el-table-column>
                <el-table-column label="BFBan状态">
                  <template #default="{ row }">
                    <el-tag :type="row.status.type">
                      {{ row.status.text }}
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="等级">
                  <template #default="{ row }">
                    <div class="flex items-center">
                      <div
                        class="w-6 h-6 flex justify-center items-center rounded-full bg-slate-600 mr-2"
                      >
                        <img
                          :src="
                            row.rank.imageUrl.replace(
                              /\[.+?\]/g,
                              'https://eaassets-a.akamaihd.net/battlelog/battlebinary'
                            )
                          "
                          alt=""
                        />
                      </div>
                      <span>{{ row.rank.number }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="kd" label="生涯kd"></el-table-column>
                <el-table-column prop="kpm" label="生涯kpm"></el-table-column>
                <el-table-column prop="spm" label="生涯spm"></el-table-column>
                <el-table-column prop="latency" label="延迟">
                  <template #default="{ row }"> {{ row.ping }}ms </template>
                </el-table-column>
                <el-table-column prop="slot" label="加入时间">
                  <template #default="{ row }">
                    {{
                      dayjs(new Date(row['join'] / 1000)).format(
                        'YYYY-MM-DD HH:mm:ss'
                      )
                    }}
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import {
  getServers,
  ServersData,
  Rotation,
  Player,
  getServerDetailV2,
  getServerPlayers,
  getServerPlayersV2,
  getPlayerInfo,
  getMultiplePlayers,
  checkBan
} from '@/api/bfv/index';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';
import { isMobile } from '@tenrok/vue-device-detect';
import { bfbanState } from '@/utils';

const router = useRouter();

const root = inject<{
  setMenuActive: (path: string) => void;
}>('root');

const activeName = ref('map');
const playActive = ref('1');
const loading = ref(false);
const drawer = ref(false);
const detail = ref<{
  owner: {
    avatar: string;
    rankImg: string;
    rank: string;
    userName: string;
    status: string;
  };
  current: {
    image: string;
    mapname: string;
    mode: string;
  };
  rotation: Rotation[];
  players: {
    teamOne: {
      name: string;
      players: Player[];
    };
    teamTwo: {
      name: string;
      players: Player[];
    };
  };
  settings: any;
}>({
  owner: {
    avatar: '',
    rankImg: '',
    rank: '',
    userName: '',
    status: ''
  },
  current: {
    image: '',
    mapname: '',
    mode: ''
  },
  rotation: [],
  players: {
    teamOne: {
      name: '',
      players: []
    },
    teamTwo: {
      name: '',
      players: []
    },
    queue: [],
    spectators: []
  },
  settings: {}
});

const searchForm = ref({
  name: 'BFV ROBOT',
  region: 'asia',
  platform: 'pc'
});

const tableData = ref<ServersData['servers']>([]);

function searchServers() {
  loading.value = true;
  getServers({
    ...searchForm.value,
    limit: 250,
    lang: 'zh-cn'
  })
    .then((res) => {
      tableData.value = res.servers;
    })
    .finally(() => {
      loading.value = false;
    });
}

function reset() {
  searchForm.value = {
    name: 'bfv robot',
    region: 'asia',
    platform: 'pc'
  };
  searchServers();
}

function handlerPlayers(target: any[], inTarget) {
  target.map((i) => {
    const index = inTarget.findIndex((p) => p.personaId == i.player_id);
    if (index >= 0) {
      const current = inTarget[index];
      i.kd = (current.kills / current.deaths).toFixed(2);
      i.kpm = current.kpm;
      i.spm = current.spm;
      i.status = current.status;
      i.rank = current.rank;
    }
  });
}

function getDetail(rowData: ServersData['servers'][0]) {
  drawer.value = true;
  getServerDetailV2({ gameid: rowData.gameId }).then((res) => {
    detail.value.rotation = res.rotation as Rotation[];
    detail.value.current = res.current;
    detail.value.settings = res.settings;

    getPlayerInfo({ name: res.owner.name }).then((res) => {
      detail.value.owner.userName = res.userName;
      detail.value.owner.rank = res.rank;
      detail.value.owner.rankImg = res.rankImg;
      detail.value.owner.avatar = res.avatar;

      const userId = res.userId;

      checkBan({ userIds: userId }).then((res) => {
        detail.value.owner.status = res.userids[userId].hacker;
      });
    });
  });

  Promise.all([
    getServerPlayers({ gameid: rowData.gameId }),
    getServerPlayersV2({ gameid: rowData.gameId })
  ]).then((res) => {
    const players = [
      ...res[0].teams[0].players,
      ...res[0].teams[1].players,
      ...res[1].data[0].players.queue,
      ...res[1].data[0].players.spectators
    ];

    Promise.all([
      getMultiplePlayers({
        pids: players.map((item) => item.player_id).join(',')
      }),
      checkBan({ personaids: players.map((item) => item.player_id).join(',') })
    ]).then((player) => {
      detail.value.players.teamOne.name = res[0].teams[0].shortName || 'TEAM 1';
      detail.value.players.teamTwo.name = res[0].teams[1].shortName || 'TEAM 2';

      const playersInfo = player[0].resulte.map((item) => {
        item.status = bfbanState(player[1].personaids[item.personaId].status);
        return item;
      });

      handlerPlayers(res[0].teams[0].players, playersInfo);
      handlerPlayers(res[0].teams[1].players, playersInfo);
      handlerPlayers(res[1].data[0].players.queue, playersInfo);
      handlerPlayers(res[1].data[0].players.spectators, playersInfo);

      detail.value.players.teamOne.players = res[0].teams[0].players;
      detail.value.players.teamTwo.players = res[0].teams[1].players;
      detail.value.players.queue = res[1].data[0].players.queue;
      detail.value.players.spectators = res[1].data[0].players.spectators;
    });
  });
}

function searchProfile(row: any) {
  root?.setMenuActive('/profile');
  router.push({ path: '/profile', query: { name: row.name } });
}

searchServers();
</script>

<style lang="less" scoped>
.play-tab {
  :deep(.el-tabs__content) {
    padding: 0;
  }
}
</style>
