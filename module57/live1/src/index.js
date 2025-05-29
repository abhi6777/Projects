import { app } from "./app.js";
import mongoose from "mongoose";
const port = 3000

// Connecting the database normally
const dbString = "mongodb+srv://abhimanyuPw:g7-7xa2yX-Uk7-m@cluster1.wwmfs6h.mongodb.net/";
// mongoose.connect(dbString);

// Connecting database in the production
(async () => {
  try {
    // Connecting to the database
    await mongoose.connect(dbString);
    console.log("Db connected successfully");

    // If there is issue in the app after connecting to the database
    app.on("error", (err) => {
      console.log("Error", err);
      throw err;
    })
    
    // Listen to the server only after connecting it 
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
  } catch (error) {
    console.error("Error: ", error)
    throw error;
  }
}) ()

