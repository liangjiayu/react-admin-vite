import { message } from 'antd';
import axios, { type AxiosRequestConfig } from 'axios';

/**
 * axios中文文档
 * @see https://www.axios-http.cn/docs/req_config
 */
const instance = axios.create({
  withCredentials: true,
});

/** 请求拦截器 */
// instance.interceptors.request.use(
//   (config) => {},
//   (error) => {}
// );

/** 兼容文件上传 */
instance.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  return config;
});

/** 响应拦截器 */
instance.interceptors.response.use(
  (response) => {
    /** 根据服务端的数据结构，统一处理异常的情况 */
    if (response?.data?.code !== 0) {
      return Promise.reject(response.data);
    }
    /** 有data的数据结构，直接返回主体数据 */
    if (response?.data?.data) {
      return response.data.data;
    }
    return response.data;
  },
  (error) => {
    const serverMsg = error?.response?.data?.message;

    /** 状态码为401，用户未认证，跳转到登录页面 */
    if (error.status === 401) {
      window.location.href = '/user/login';
      return;
    }
    /** 优先使用业务错误消息 */
    message.error(serverMsg || error.message || '请求失败!');
    return Promise.reject(error);
  },
);

async function request<T>(url: string, options?: AxiosRequestConfig) {
  return instance.request<T, T>({
    url,
    ...options,
  });
}

export default request;
