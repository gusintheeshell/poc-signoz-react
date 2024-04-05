import axios, { AxiosInstance } from "axios";

const baseURL = "https://rickandmortyapi.com/api";

const api: AxiosInstance = axios.create({
  baseURL,
});

export default api;
