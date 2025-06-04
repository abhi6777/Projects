const app = require('./app.js');
require('dotenv').config();
const connectToDatabase = require('./config/db.config.js');

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectToDatabase(); // connect to database
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
};

startServer();