const express = require("express");

const app = express();

let hostname = "localhost";
const port = 3000;
let counter = 1;

app.get("/", (req, res) => {
     res.send({counter});
});

app.get("/increment", (req,res) => {
     counter++;
     res.send({counter});
});

app.get("/decrement", (req, res) => {
     counter--;
     res.send({counter});
});

app.listen(port, () => {
     console.log(`Sever is live on ${hostname}: ${port}`);
});