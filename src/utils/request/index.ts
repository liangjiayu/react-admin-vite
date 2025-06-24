import axios, { type AxiosRequestConfig } from "axios";

const instance = axios.create({
  // baseURL: "https://api.example.com",
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
instance.interceptors.response.use((response) => {
  if (Array.isArray(response?.data?.data)) {
    return response?.data;
  }
  return response.data?.data;
});

async function request<T>(url: string, options?: AxiosRequestConfig) {
  return instance.request<T, T>({
    url,
    ...options,
  });
}

export default request;
