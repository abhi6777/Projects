import User from "../models/user.model.js";

export const home = (req, res) => {
     res.send("It's me Abhimanyu Kumar Mahto");
     res.end();
};

export const createUser = (req, res) => {
     try {
          const {name, email } = req.body;

          if(!name || !email) {
               throw new Error("Name and email are required");
          }

          // check if user is already registered
          const userExists = User.findOne({email});

          // if user exists throw error
          if(userExists) {
               throw new Error("User already exists");
          }

          const user = User.create ({
               name,
               email
          });

          res.status(201).json({
               success: true,
               message: "user Created successfully",
               user
          })
          
     } catch (error) {
          console.log(error);
          res.status(400).json({
               success: false,
               message: error.message
          })          
     }
}
export const getUser = (req, res) => {}
export const editUser = (req, res) => {}
export const deleteUser = (req, res) => {}