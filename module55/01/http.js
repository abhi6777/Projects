const http = require("http");

let server = http.createServer((req, res) => {
     if (req.url == "/") {
          res.write("<h1> I am Happy to learn Full stack web Development From Pw Skills!")
     }

     res.end();
});

server.listen(5000);
console.log("Http Server is running n Port 5000");