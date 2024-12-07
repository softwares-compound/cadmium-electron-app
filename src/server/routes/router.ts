// src/routes/routes.ts
import { Router } from 'express';
import handleLogin from '../controllers/handle-login';

const router = Router();
// TEST API
router.post('/echo-request', (req, res) => {
    res.json({ result: req.body });
});

router.post('/login', handleLogin);

// Add more routes as needed

export default router;
