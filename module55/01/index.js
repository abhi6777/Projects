// These are the assignments of pw
const fs = require("fs");

// const data = `
// Node.js is a powerful JavaScript runtime built on Chrome's V8 engine.
// It allows you to run JS code on the server side.
// Node.js is event-driven, non-blocking, and perfect for building fast, scalable network apps.
// `;

// Creating a new file and writing tha data inside it 
// fs.writeFile("nodeJs_architecture.txt", data , function(err) {
//      if (err) {
//           console.log("Error File not created");
//      }
//      console.log("File Created");
// });

// q.no 3
// Reading and printing the files data to console

// fs.readFile("nodeJs_architecture.txt","utf-8", (err, data) => {
//      if (err) {
//           console.log("There is error in reading file");
//      }
//      console.log("Output Here -> ", data);
// });

// q.no 4

// let data1 = `Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.`;

// fs.appendFile("nodeJs_architecture.txt", data1, (err) => {
//      if (err) {
//           console.log("Error in Appending more data");
//      }
//      console.log("Data appended Success");

//      // Reading and printing the file
//      fs.readFile("nodeJs_architecture.txt", "utf-8", (err, data) => {
//           if (err) console.log("there is error in reading file");

//           console.log("Next output Here -> ", data);
//      });
// });

// Q no. 5 

fs.unlink("nodeJs_architecture.txt", (err) => {
     if (err) console.log("Error in deleting file");

     console.log("File deleted Success");
});