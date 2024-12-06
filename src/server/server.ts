// src/server/server.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import corsOptions from './middlewares/cors-option';
import router from './routes/router';
import log from './middlewares/logging';
import logger from './utils/logger';
import config from './config';

const app = express();

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
// Routes
// app.use(router);
app.use('/api', router);
// Global log Handler
app.use(log);

export function startServer() {
    const server = app.listen(config.port, () => {
        logger.info(`Express server is running on http://localhost:${config.port}`);
    });
    return server;
}
