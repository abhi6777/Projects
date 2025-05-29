import express from "express";
import { home, createUser, getUser, editUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();
router.get("/", home);
router.post("/createuser", createUser);
router.get("/getusers", getUser);
router.delete("/deleteuser/:id", deleteUser);
router.put("/updateuser/:id", editUser)

export { router };