import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectToDb from "./config/db.js";
import { home } from "./controllers/userController.js";
import cors from "cors";

const app = express();

connectToDb();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// implementing cors (cross origin resource sharing)
app.use(cors());

import { router as userRoutes } from "./routes/userRoutes.js";
app.use("/", userRoutes);


export default app;