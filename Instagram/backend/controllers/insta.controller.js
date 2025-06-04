const { default: mongoose } = require("mongoose");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");
require('dotenv').config();
const User = require("../model/user.schema");


const home = async (req, res) => {
     res.send("hello");
};

const signup = async (req, res) => {
     const { name, username, email, password, confirmPassword, bio } = req.body;

     try {
          if (!name || !username || !email || !password) {
               return res.status(400).json({ 
                    success: false,
                    message: "All fields are required"
               });
          };

          // validate email
          const validateEmail = emailValidator.validate(email);
          if (!validateEmail) {
               return res.status(400).json({
               success: false,
               message: "Please provide a valid email",
               });
          }

          // Check if the user already exists
          const existingUser = await User.findOne({ email, username });

          if (existingUser) {
               return res.status(400).json({
                    success: false,
                    message: "Username or Email already exists"
               });
          };

          // check password == confirm password
          if ( password !== confirmPassword ) {
               return res.status(400).json({
                    success: false,
                    message: "Password do not match"
               });
          };

          // Saving the data to the database
          const userInfo = new User(req.body);
          const saveUserToDb = await userInfo.save();

          console.log("user created successfully", saveUserToDb);
          res.status(201).json({ 
               success: true,
               data: saveUserToDb 
          });

     } catch (error) {
          console.error("Error creating user:", error);
          res.status(400).json({ 
               success: false,
               message: "User creation failed",
               error: error.message
          });
     }
};

const login = async (req, res) => {
     const { username, password } = req.body;

     try {
          // Check if email and password is there 
          if(!username || !password) {
               return res.status(400).json({
               success: false,
               message: "Every field is required"
               });
          };

          const userDetail = await User.findOne({ username }).select("+password");

          // check if username or password is correct 
               if (username !== userDetail.username && !(bcrypt.compareSync(password, userDetail.password))) {
                    return res.status(400).json({
                    success: false,
                    message: "Invalid credentials"
               });
          };

          // implementing jsonwebtoken for authentication
          const token = userDetail.generateAuthToken();
          userDetail.password = undefined; // Remove password from user details before sending response

          // Set cookie
          res
          .cookie("token", token, {
               httpOnly: true,
               secure: false, // true in production (HTTPS)
               sameSite: "Lax", // or "Strict"
               path: "/",
               maxAge: 24 * 60 * 60 * 1000 // 1 day
          })
          .status(200).json({
               success: true,
               message: "LogIn successful User found",
               data: userDetail,
               token
          });


     } catch (error) {
          console.error(error);
          res.status(400).json({
               success: false,
               message: `Error in LoggingIn ${error}`
          });
     }
};

const getUserDetails = async (req, res) => {
     const userId = req.user.id; // Assuming user ID is stored in req.user after authentication

     try {
          const user = await User.findById(userId).select("-password"); // Exclude password from response
          if (!user) {
               return res.status(404).json({
                    success: false,
                    message: "User not found"
               });
          }
          res.status(200).json({
               success: true,
               data: user
          });
     } catch (error) {
          console.error("Error fetching user details:", error);
          res.status(400).json({
               success: false,
               message: "Failed to fetch user details",
               error: error.message
          });
     }
};

module.exports = {
     home, signup, login, getUserDetails
};