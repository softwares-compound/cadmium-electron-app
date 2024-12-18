import axios, { AxiosInstance } from "axios";

const CLOUD_BASE_URL = 'https://cadmium.softwarescompound.in/';
const LOCAL_BASE_URL = 'http://localhost:6969/api';

export const CLOUD_AXIOS_INSTANCE: AxiosInstance = axios.create({
    baseURL: CLOUD_BASE_URL,
});

export const LOCAL_AXIOS_INSTANCE: AxiosInstance = axios.create({
    baseURL: LOCAL_BASE_URL,
});