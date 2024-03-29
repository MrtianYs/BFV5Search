import axios from 'axios';
import { ElMessage } from 'element-plus';

const instance = axios.create({
  timeout: 600000
});

instance.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    ElMessage({
      message: '网络错误',
      grouping: true,
      type: 'error'
    });
    return Promise.reject(error);
  }
);

export default instance;
