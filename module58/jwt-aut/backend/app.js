const express = require("express");
const authRouter = require("./router/auth.route");
const databaseConnect = require("./config/database.config");

const app = express();

databaseConnect(); // connecting to database

app.use(express.json()); // Handles json data


app.use("/api/auth", authRouter); // request handler

app.use("/", (req, res) => {
     res.status(200).json({
          data: "JWTAuth Server"
     })
});

module.exports = app;
