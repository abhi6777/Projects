const express = require("express");

const app = express();

const hostname = "localhost";
const port = 3000;

app.get("/", (req, res) => {
     res.send("{msg:`I am homepage`}");
});

app.get("/about", (req, res) => {
     res.send("{msg:`I am about page`}")
});

app.get("/contact", (req, res) => {
     res.send("{email:`support@pwskills.com`}");
});

app.listen(port, () => {
     console.log(`Sever is live at ${hostname}: ${port}`);
});