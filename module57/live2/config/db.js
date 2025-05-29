import mongoose from "mongoose";

// connecting to mongodb
const connectToDb = async () => {
  try {
     // Connecting to the database
     await mongoose.connect(process.env.MONGO_URL);
     console.log("Connected successfully to database");
  } catch (error) {
     // If any error comes in
     console.error("DB connection failed:", error);
  }
};

export default connectToDb;