import axios, { AxiosInstance } from "axios";

const CLOUD_BASE_URL = 'http://43.204.216.93/';
const LOCAL_BASE_URL = 'http://localhost:3001/';

export const CLOUD_AXIOS_INSTANCE: AxiosInstance = axios.create({
    baseURL: CLOUD_BASE_URL,
});

export const LOCAL_AXIOS_INSTANCE: AxiosInstance = axios.create({
    baseURL: LOCAL_BASE_URL,
});