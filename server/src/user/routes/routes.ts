import { Router } from "express";
import { login, register } from "../controller/userController";

const userRoutes = Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);

export default userRoutes;
