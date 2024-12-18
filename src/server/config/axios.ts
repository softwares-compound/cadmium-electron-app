import axios, { AxiosInstance } from "axios";

const CLOUD_BASE_URL = 'https://cadmium.softwarescompound.in/';

export const CLOUD_AXIOS_INSTANCE: AxiosInstance = axios.create({
    baseURL: CLOUD_BASE_URL,
});