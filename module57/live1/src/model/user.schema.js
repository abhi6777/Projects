import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
     { 
          name: {
               type: String,
               required: [true, "This is required Field"],
               maxLength: [50, "Name should be less than 50 characters"]
          },
          email: {
               type: String,
               require: true,
               unique: true
          },
          username: {
               type: String,
               unique: true
          },
          Password: {
               type: String,
               unique: true
          },
          size: String 
     }
);

export default mongoose.model("User", userSchema);