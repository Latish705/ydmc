import { Router } from "express";
import { register } from "ts-node";
import { login } from "../controller/userController";

const userRoutes = Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);

export default userRoutes;
