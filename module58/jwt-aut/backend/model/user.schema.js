const mongoose = require("mongoose");
const { Schema } = mongoose;
const JWT = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const userSchema = new Schema({
     name: {
          type: String,
          required: [true, "User name is required"],
          minLength: [5, "Name must be greater than 5 character"],
          maxLength: [50, "Name must not exceed 50 character"],
          trim: true
     },
     email: {
          type: String,
          required: [true, "User email is required"],
          unique: [true, "user already exists"],
          lowercase: true
     },
     password:{
          type: String,
          select: false
     },
     forgotPasswordToken: {
          type: String,
     },
     forgotPasswordExpiryDate: {
          type: String,
     }
}, {
     timestamps: true
});

userSchema.pre('save', async function(next) {
     if (!this.isModified('password')) {
          return next();
     };

     this.password = await bcrypt.hash(this.password, 10);
     return next();
})

userSchema.methods = {
     jwtToken() {
          return JWT.sign(
               {id: this._id, email: this.email},
               process.env.SECRET,
               {expiresIn: "24h"}
          )
     }
}

module.exports = mongoose.model("user", userSchema);