import { Router } from "express";
import { loginAdmin, getAdminDashboard } from "../controller/adminController";

const router: Router = Router();

router.post("/login", loginAdmin);
router.get("/dashboard", getAdminDashboard);

export default router;
