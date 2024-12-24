// src/routes/routes.ts
import { Router } from 'express';
import handleLogin from '../controllers/handle-login';
import handleGetOrgList from '../controllers/handle-get-org-list';
import validateCredentials from '../controllers/handle-validate-user';
import handleCreateProject from '../controllers/handle-create-project';
import handleCheckProjectRemoteLink from '../controllers/handle-check-project-remote-link';
import validateHeadersMiddleware from '../middlewares/validation';


const router = Router();
// TEST API
router.post('/echo-request', (req, res) => {
    res.json({ result: req.body });
});

router.post('/login', handleLogin);
router.get('/org-list', handleGetOrgList);
router.get('/project/:project_id', validateHeadersMiddleware, handleCheckProjectRemoteLink);
router.post('/project', validateHeadersMiddleware, handleCreateProject);
router.post('/validation', validateCredentials);

export default router;
