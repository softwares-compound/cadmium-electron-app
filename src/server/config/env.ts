// src/config/env.ts
import dotenv from 'dotenv';
dotenv.config();

const env = {
    PORT: process.env.EXPRESS_PORT,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    // Add other environment variables here
};

export default env;
