import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const baseURL = "https://rickandmortyapi.com/api";

const api: AxiosInstance = axios.create({
  baseURL,
});

export type Options = AxiosRequestConfig;
export type Response<T> = AxiosResponse<T>;

export default api;
