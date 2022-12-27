import axios, { AxiosRequestConfig } from 'axios';

const AxiosInstance = (data: AxiosRequestConfig, token?: string) => {
  try {
    const request = axios({
      method: data.method,
      url: data.url,
      withCredentials: false,
      data: data.data,
      headers: {
        Authorization: token ? 'Bearer ' + token : '',
      },
      params: data.params,
    });
    return request;
  } catch (error) {
    return error;
  }
};

export default AxiosInstance;
