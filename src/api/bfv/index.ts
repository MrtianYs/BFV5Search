import instance from '../request';

const base = 'https://api.gametools.network';

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

export function getPlayerInfo(params: {
  oid?: string;
  name?: string;
}): Promise<any> {
  return instance({
    url: `${base}/bfv/stats/`,
    params: {
      ...params,
      lang: 'zh-cn'
    }
  });
}
