import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     name: {
          type: String,
          required: [true, "Name is required field"],
          trim: true,
          maxLength: [30, "Name must be less then 30 words"]
     },
     email: {
          type: String,
          required: [true, "Email is Required"],
          unique: true,
     }
});

export default mongoose.model("User", userSchema);