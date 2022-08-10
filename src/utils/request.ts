import axios, { AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";
import axiosRetry from "axios-retry";

const instance = axios.create({
  //   withCredentials: true,
  baseURL: "/api",
});

axiosRetry(axios, { retries: 3 });

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // success
    if (response.data.code === 0) {
      return response.data;
    }
    ElMessage.error(response.data.msg);
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    ElMessage.error(error);
    return Promise.reject(error);
  }
);

interface BaseResponse<T> {
  data: T;
  code: number;
  msg: string;
}

export default function request<T = unknown>(option: AxiosRequestConfig) {
  return new Promise<T>((resolve, reject) => {
    instance
      .request<T>(option)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
}
