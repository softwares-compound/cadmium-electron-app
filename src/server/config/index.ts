// src/config/index.ts
import env from './env';

export default {
    port: env.PORT || 3001,
    cors: {
        origin: env.CORS_ORIGIN || 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
    },
    // Add other configurations as needed
};
