const express = require("express");

const app = express();

hostname = "localhost";
port = 5000;

app.get("/", (req, res) => {
     res.send("Hello World");
});

app.get("/about", (req, res) => {
     res.send("About Me");
});

app.get("/contact", (req, res) => {
     res.send("Contact Me");
});

app.listen(port, () => {
     console.log(`server is running at ${hostname}: ${port}`);
});