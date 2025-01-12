import instance from '../request';

const base = 'https://api.gametools.network';

export function getPlayerInfo(params: {
  oid?: string;
  name?: string;
  playerid?: string;
}): Promise<any> {
  return instance({
    url: `${base}/bf2042/stats/`,
    params: {
      ...params,
      lang: 'zh-cn'
    }
  });
}

export function getWeapons(params: {
  name: string;
}): Promise<Record<string, any>> {
  return instance({
    url: `${base}/bf2042/weapons/`,
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
    url: `${base}/bf2042/vehicles/`,
    params: {
      ...params,
      lang: 'zh-cn'
    }
  });
}
