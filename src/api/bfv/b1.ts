import instance from '../request';

const base = 'https://api.gametools.network';

export function getPlayerInfo(params: {
  oid?: string;
  name?: string;
  playerid?: string;
}): Promise<any> {
  return instance({
    url: `${base}/bf1/stats/`,
    params: {
      ...params,
      lang: 'zh-tw'
    }
  });
}

export function getWeapons(params: {
  name: string;
}): Promise<Record<string, any>> {
  return instance({
    url: `${base}/bf1/weapons/`,
    params: {
      ...params,
      lang: 'zh-tw'
    }
  });
}

export function getVehicles(params: {
  name: string;
}): Promise<Record<string, any>> {
  return instance({
    url: `${base}/bf1/vehicles/`,
    params: {
      ...params,
      lang: 'zh-tw'
    }
  });
}
