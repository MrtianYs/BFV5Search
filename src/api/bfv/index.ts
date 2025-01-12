import instance from '../request';

const base = 'https://api.gametools.network';
const baseUrl = 'https://www.bfvrobot.net';

//www.bfvrobot.net/bfv/serverDetails?gameid=8644582110490&settings=true&region=all&platform=pc&lang=zh-CN

export type ServersData = {
  servers: {
    prefix: string;
    description: string;
    playerAmount: number;
    maxPlayers: number;
    inSpectator: number;
    inQue: number;
    serverInfo: string;
    url: string;
    mode: string;
    currentMap: string;
    ownerId: string;
    country: string;
    region: string;
    platform: string;
    serverId: string;
    isCustom: boolean;
    smallMode: string;
    teams: any;
    official: boolean;
    gameId: string;
  }[];
};

export type Rotation = {
  mapname: string;
  index: number;
  image: string;
  mode: string;
};

export type Player = {
  rank: number;
  latency: number;
  slot: number;
  join_time: number;
  user_id: number;
  player_id: number;
  name: string;
  platoon: string;
};

export function getServers(params: {
  name: string;
  platform: string;
  limit?: number;
  region: string;
  lang?: string;
}): Promise<ServersData> {
  return instance({
    url: `${base}/bfv/servers`,
    params
  });
}

export function getServerDetail(params: { gameid: string }): Promise<any> {
  return instance({
    url: `${base}/bfv/detailedserver`,
    params: {
      ...params,
      lang: 'zh-cn'
    }
  });
}

export function getServerPlayers(params: { gameid: string }): Promise<any> {
  return instance({
    url: `${base}/bfv/players`,
    params: {
      ...params,
      lang: 'zh-cn'
    }
  });
}

export function getServerPlayersV2(params: { gameid: string }): Promise<any> {
  return instance({
    url: `https://api1.bfvrobot.net/api/players`,
    params: {
      ...params,
      lang: 'zh-cn'
    }
  });
}

export function getPlayerInfo(params: {
  oid?: string;
  name?: string;
  playerid?: string;
}): Promise<any> {
  return instance({
    url: `${base}/bfv/stats/`,
    params: {
      ...params,
      lang: 'zh-cn'
    }
  });
}

export function getMultiplePlayers(params: { pids: string[] }[]) {
  return instance({
    url: `https://api1.bfvrobot.net/api/bfv/stats`,
    params
  });
}

export function checkBan(params: {
  names?: string;
  userIds?: string;
}): Promise<any> {
  return instance({
    url: `${base}/bfban/checkban/`,
    params
  });
}

export function getWeapons(params: {
  name: string;
}): Promise<Record<string, any>> {
  return instance({
    url: `${base}/bfv/weapons/`,
    params: {
      ...params,
      lang: 'zh-cn'
    }
  });
}

export function getVehicles(params: {
  name: string;
}): Promise<Record<string, any>> {
  return instance({
    url: `${base}/bfv/vehicles/`,
    params: {
      ...params,
      lang: 'zh-cn'
    }
  });
}

export function getServerDetailV2(params: { gameid: string }): Promise<any> {
  return instance({
    url: `${baseUrl}/bfv/serverDetails`,
    params: {
      ...params,
      settings: true,
      lang: 'zh-cn'
    }
  });
}
