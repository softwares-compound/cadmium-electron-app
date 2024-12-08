// src/routes/routes.ts
import { Router } from 'express';
import handleLogin from '../controllers/handle-login';
import handleGetOrgList from '../controllers/handle-get-org-list';

const router = Router();
// TEST API
router.post('/echo-request', (req, res) => {
    res.json({ result: req.body });
});

router.post('/login', handleLogin);
router.get('/org-list', handleGetOrgList);


export default router;
