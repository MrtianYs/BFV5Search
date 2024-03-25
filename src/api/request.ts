import axios from 'axios';

const messages = {
  'zh-CN': {
    400: '错误请求',
    401: '未授权，请重新登录',
    403: '拒绝访问',
    404: '请求错误，未找到资源',
    408: '请求超时',
    500: '服务端出错',
    502: '网络错误',
    503: '服务不可用',
    504: '网络超时',
    505: 'http版本不支持该请求'
  },
  'en-US': {
    400: 'bad request',
    401: 'Unauthorized, please log in again',
    403: 'access denied',
    404: 'Bad request, resource not found',
    408: 'Request timed out',
    500: 'server error',
    502: 'Network Error',
    503: 'service is not available',
    504: 'network timeout',
    505: 'The http version does not support the request'
  }
};

const instance = axios.create({
  timeout: 600000
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
