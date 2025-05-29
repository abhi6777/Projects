const express = require("express");

const app = express();

const hostname = "localhost";
const port = 3000;

let random = Math.random() * 10;

app.get("/random", (req, res) => {
     res.send({ random });
});

app.listen(port, () => {
     console.log("Sever is live at" + hostname + ":" + port);
});