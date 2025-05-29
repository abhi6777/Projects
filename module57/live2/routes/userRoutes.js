import express from "express";
import { home, createUser, getUser, editUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();
router.get("/", home);
router.post("/createuser", createUser);

export { router };