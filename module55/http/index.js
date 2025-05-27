const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>Hello Node.js It's Abhimanyu</h1>");
  }

  if (req.url == "/about") {
     res.write("<h2> This is About section <h2> ");
  }
  res.end();
});

server.listen(5000);
console.log("HTTP server is Running on Port 5000");
