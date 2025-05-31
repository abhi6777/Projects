require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/db.config.js');

const app = express();
// This file is responsible for creating the Express application and connecting to the database.
// Connect to the database
connectToDb();

app.use(express.json()); // Handles JSON request bodies

// Import and use the user routes
const userRoutes = require('./routes/user.routes.js');
app.use("/", userRoutes);

module.exports = app;  