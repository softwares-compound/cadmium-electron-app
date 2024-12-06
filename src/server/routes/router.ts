// src/routes/apiRoutes.ts
import { Router } from 'express';
import apiController from '../controllers/example-controller';

const router = Router();

router.get('/', apiController.getMessage);

// Add more routes as needed

export default router;
