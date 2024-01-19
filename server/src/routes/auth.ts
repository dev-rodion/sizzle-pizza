import { Router } from "express";
import { registerUser, loginUser } from "../controllers";

const authRoutes = Router();

authRoutes.post('/register', registerUser);
authRoutes.get('/login', loginUser);

export default authRoutes;