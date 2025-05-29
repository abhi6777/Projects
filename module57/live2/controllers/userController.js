import User from "../models/user.model.js";

export const home = (req, res) => {
     res.send("It's me Abhimanyu Kumar Mahto");
     res.end();
};

export const createUser = async (req, res) => {
     try {
          const { name, email } = req.body;

          if(!name || !email) {
               throw new Error("Name and email are required");
          }

          // check if user is already registered
          const userExists = await User.findOne({email});

          // if user exists throw error
          if(userExists) {
               throw new Error("User already exists");
          }

          const user = await User.create ({
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

export const getUser = async (req, res) => {
     try {
          const user = await User.find({});
          res.status(200).json({
               success: true,
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

export const editUser = async (req, res) => {
     try {
          const user = await User.findByIdAndUpdate(req.params.id, req.body)
          res.status(200).json({
               success: true,
               runValidators: true,
               message: "user update Successfully"
          })
          
     } catch (error) {
          console.log(error);
          res.status(400).json({
               success: false,
               message: error.message
          })
     }
}

export const deleteUser = async (req, res) => {
     try {
          const userId = req.params.id;
          const user = await User.findByIdAndDelete(userId);
          res.status(200).json({
               success: true,
               message: "user deleted successfully"
          })
          
     } catch (error) {
          console.log(error);
          res.status(400).json({
               success: false,
               message: error.message
          })
     }
}