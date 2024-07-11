import { Router } from 'express';
import { registerAdmin, loginAdmin, getAdminDashboard } from '../controller/adminController';

const router: Router = Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/dashboard', getAdminDashboard);

export default router;
