const mongoose = require('mongoose');

const MONGOOSE_URL = process.env.MONGO_URI;

const databaseConnect = async () => {
     try {
          const conn = await mongoose.connect(MONGOOSE_URL);
          console.log(`connected to the database successfully ${conn.connection.host}`);
     } catch (error) {
          console.error("Db Connection failed", error);
     };
};

module.exports = databaseConnect ;