// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

const log = (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.stack);
    next(err);
};

export default log;
