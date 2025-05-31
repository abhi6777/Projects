const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGO_URL;

const databaseConnect = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URL);
    console.log(`connected database Successfully ${conn.connection.host}`);
  } catch (error) {
    console.error("DB connection failed", error);
  }
};

module.exports = databaseConnect;
