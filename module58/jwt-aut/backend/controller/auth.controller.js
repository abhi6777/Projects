const userModel = require("../model/user.schema");
const emailValidator = require("email-validator");
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Check required fields
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Every field is required",
      });
    }

    // Validate email
    const validEmail = emailValidator.validate(email);
    if (!validEmail) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email",
      });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password do not match",
      });
    }

    // Save user
    const userInfo = new userModel(req.body);
    const result = await userInfo.save();

    res.status(201).json({
      success: true,
      data: result,
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Account already exists",
      });
    }

    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password is there 
    if(!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Every field is required"
      });
    };

    const user = await userModel.findOne({ email }).select("+password");

    // if user user does not exist or password does not match 
    if (!user || !(bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    };

    const token = user.jwtToken();
    user.password = undefined;

    const cookieOptions = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true
    }

    res.cookie("token", token, cookieOptions)
    res.status(200).json({
      success: true,
      message: "SignIn successful user found in db",
      data: user
    });

  } catch (error) {
    console.error(error);
    res.status(400).json({
          success: false,
          message: `Error in signingIn ${error}`
    });
  };
};

const getuser = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await userModel.findById(userId);
    res.status(200).json({
      success: true,
      data: user
    })
    
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "There is some error in loading user"
    })
  }
};

const logout = async (req, res) => {
  try {
    const cookieOptions = {
      expires: new Date(),
      httpOnly: true
    }
    res.cookie("token", null, cookieOptions);
    res.status(200).json({
      success: true,
      message: "Logged out Successfully"
    })
    
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
};

module.exports = {
  signup, signin, getuser, logout
};
