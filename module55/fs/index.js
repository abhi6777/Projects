// Importing File system
const fs = require('fs');

// // Asyncronous way to read file 

// fs.readFile('input.txt', function(err, data) {
//      if(err) {
//           console.log("Error", err);
//      }
//      console.log("data", data.toString());
//      console.log("success");
// })

// console.log("hello abhimanyu ");

// // syncronous way to read file 

// const read = fs.readFileSync('input.txt');
// console.log("data > ", read.toString());

// Writing into File Also creates a new file if doesnot exits

fs.writeFile('input.txt', "updated by Abhimanyu Kumar Mahto", function(err) {
if(err) {
console.log("Error in writing file");
}

console.log("success in writing file");
});

fs.appendFile("input.txt", "Pw skill", "utf-8", function(err) {
if(err) {
console.log("Error in updating file");
}
console.log("file appended by new data");
});

// OPen file
fs.open("input.txt", "r+", function(err, fd) {
  if (err) {
    console.log("error in opening the file", err);
  } else {
    console.log("successfully opened the file");

    fs.close(fd, function(err) {
      if (err) {
        console.log("error in closing file");
      } else {
        console.log("file closed");
      }
    });
  }
});

// Deletes a file 
// fs.unlink("input.txt", function(err) {
//   if (err) {
//     console.log("error deleting file", err);
//   } else {
//     console.log("file deleted");
//   }
// });