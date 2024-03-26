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

export function getServerDetail(params) {
  return instance({
    url: `${base}/bfv/detailedserver/`,
    params
  });
}
