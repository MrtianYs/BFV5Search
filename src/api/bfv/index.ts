import instance from '../request';

const base = 'https://api.gametools.network';

export function getServers(params: {
  name: string;
  platform: string;
  limit?: number;
  region: string;
  lang?: string;
}) {
  return instance({
    url: `${base}/bfv/servers`,
    params
  });
}
