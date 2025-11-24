import express from "express";
import * as UserController from "../controllers/UserController.js";

const UserRoutes = express.Router();

UserRoutes.post("/register", UserController.register);
UserRoutes.post("/login", UserController.loginUser);

export default UserRoutes;
