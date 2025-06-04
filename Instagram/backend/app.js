const express = require('express');
const routes = require('./routes/insta.route.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(express.json()); // 👈 required for POST requests with JSON body
app.use(cors({
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500'], // your frontend origin
  credentials: true
})); // Enable CORS

app.use(express.urlencoded({ extended: true })); // for form data
app.use(cookieParser()); // for parsing cookies

app.use('/', routes); // Routes of different page

app.get('/', (req, res) => {
     res.send("Express is working fine");
});

module.exports = app ;