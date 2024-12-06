import axios, { AxiosInstance } from "axios";

const CLOUD_BASE_URL = 'http://43.204.216.93/';

export const AXIOS_INSTANCE: AxiosInstance = axios.create({
    baseURL: CLOUD_BASE_URL,
});