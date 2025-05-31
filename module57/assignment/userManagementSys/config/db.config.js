const mongoose = require('mongoose');
require('dotenv').config();
// This file is responsible for connecting to the MongoDB database using Mongoose.

const connectToDb = async () => {
     try { // Connecting to database
          const conn = await mongoose.connect(process.env.MONGO_URI);
          console.log(`Connected to database ${conn.connection.host}:${conn.connection.port}`);
          
     } catch (error) {
          console.error("Error connecting to the database:", error);
          process.exit(1); // Exit the process with failure
     }
}

module.exports = connectToDb ;