const mongoose = require('mongoose');
require('dotenv').config();

const { Schema } = mongoose ;

const userSchema = new Schema({
     name: {
          type: String,
          maxLength: [50, 'Name cannot exceed 50 characters'],
          required: [true, 'Name is required'],
          trim: true
     },

     username: {
          type: String,
          maxLength: [20, 'Username cannot exceed 20 characters'],
          required: [true, 'Username is required'],
          unique: true,
          trim: true
     },

     email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
          trim: true,
          lowercase: true,
          match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
     },

     password: {
          type: String,
          required: [true, 'Password is required'],
          minLength: [6, 'Password must be at least 6 characters long'],
          select: false // Exclude password from query results by default
     },

     bio: {
          type: String,
          maxLength: [160, 'Bio cannot exceed 160 characters'],
          trim: true
     },
});

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function (next) {
     if (this.isModified('password')) {
          const bcrypt = require('bcrypt');
          const saltRounds = 10;
          this.password = await bcrypt.hash(this.password, saltRounds);
     }
     next();
});

// Implementing jsonwebtoken for authentication
userSchema.methods.generateAuthToken = function () {
     const jwt = require('jsonwebtoken');
     const token = jwt.sign({ id: this._id }, process.env.SECRET, { expiresIn: '24h' });
     return token;
};

const User = mongoose.model('User', userSchema);
module.exports = User;