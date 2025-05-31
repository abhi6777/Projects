const express = require('express');
const { router } = require('../app');
const mongoose = require('mongoose');
const User = require('../models/user.model.js');

const  home = async (req, res) => {
    try {
          await res.send({"message": "Welcome to the home route", "status": "success"});
    } catch (error) {
     console.error(error);
     res.status(400).json({
          success: false,
          message: 'Error in proceeding with home route'
     })
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        // save the data to the database
            if (!name || !email || !password || !confirmPassword) {
               return res.status(400).json({
                     success: false,
                     message: 'Please provide all required fields'
               });
            }

        const user = new User({ name, email, password });
        await user.save();

        await res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: { name, email, password }
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: 'Error in creating user'
        });
    }
};

module.exports = {
    home,
    createUser
};