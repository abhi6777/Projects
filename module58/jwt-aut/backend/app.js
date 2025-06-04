const express = require("express");
const authRouter = require("./router/auth.route");
const databaseConnect = require("./config/database.config");
const cookieParser = require("cookie-parser");
const cors = require('cors');

const app = express();

databaseConnect(); // connecting to database

app.use(cookieParser()); // Handles cookie parsing
app.use(express.json()); // Handles json data
 // cors origin resource sharing enabled 
app.use(cors({
     origin: [process.env.CLIENT_URL],
     credentials: true
}));


app.use("/api/auth", authRouter); // request handler

app.use("/", (req, res) => {
     res.status(200).json({
          data: "JWTAuth Server"
     })
});

module.exports = app;
