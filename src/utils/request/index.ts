import { message } from 'antd';
import axios, { type AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.PROD ? 'https://proapi.azurewebsites.net' : '/',
  // timeout: 10000,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

// 请求拦截器
// instance.interceptors.request.use(
//   (config) => {},
//   (error) => {}
// );

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 有total的数据结构，认为是分页数据
    if (response?.data?.total) {
      return response.data;
    }
    // 有data的数据结构，直接返回主体数据
    if (response?.data?.data) {
      return response.data.data;
    }
    return response.data;
  },
  (error) => {
    const serverMsg = error?.response?.data?.message;
    message.error(serverMsg || error.message || '请求失败!');

    /** 状态码为401，统一用户信息未认证，跳转到登录页面 */
    if (error.status === 401) {
      window.location.href = '/user/login';
      return;
    }
    throw error;
  },
);

async function request<T>(url: string, options?: AxiosRequestConfig) {
  return instance.request<T, T>({
    url,
    ...options,
  });
}

export default request;
