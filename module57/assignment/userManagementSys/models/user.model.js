const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
     name: {
          type: String,
          required: [true, 'Name is required'],
          minLength: [3, 'Name must be at least 3 characters long'],
          maxLength: [50, 'Name must be at most 50 characters long'],
          trim: true
     },
     email: {
          type: String,
          required: [true, 'Email is required'],
          unique: [true, 'Email already exists'],
          match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
          trim: true
     },
     password: {
          type: String,
          required: [true, 'Password is required'],
          select: false // Exclude password from queries by default
     },
}, {
     timestamps: true
});

module.exports = mongoose.model('User', userSchema);