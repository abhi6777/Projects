const app = require("./app.js");
require('dotenv').config();
// This file is responsible for starting the Express server and listening on a specified port.

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});