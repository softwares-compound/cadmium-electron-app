// src/controllers/apiController.ts
import { Request, Response, NextFunction } from 'express';
import exampleService from '../services/example-service';

const getMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const message = await exampleService.fetchMessage();
        res.json({ message });
    } catch (error) {
        next(error);
    }
};

export default {
    getMessage,
};
