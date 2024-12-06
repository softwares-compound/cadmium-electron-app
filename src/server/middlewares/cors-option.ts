// src/middlewares/corsOptions.ts
import { CorsOptions } from 'cors';
import config from '../config';

const corsOptions: CorsOptions = {
    origin: config.cors.origin,
    methods: config.cors.methods,
    credentials: config.cors.credentials,
};

export default corsOptions;
