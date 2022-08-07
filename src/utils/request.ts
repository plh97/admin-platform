import axios, { Axios, AxiosProxyConfig } from "axios";
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
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    ElMessage.error(error);
    return Promise.reject(error);
  }
);

export default function request(option: AxiosProxyConfig) {
  return new Promise((resolve, reject) => {
    instance
      .request(option)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
