// 1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.

// write a function with parameter array and a callback function 
function doubleArrayElements(arr, callback) {
     // return An array where each element is doubled
     arr.forEach((element, index) => {
          arr[index] = callback(element);
     });
     return arr;
}

function callback(el) {
     return el * 2;
}

let arr = [1, 3, 4, 5, 5, 2, 5, 2, 2, 5, 6, 2, 1];

// console.log(doubleArrayElements(arr, callback));

// 2. String Manipulation.
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
// with the manipulated string or the new string to the console.

// write function manipulate String
function manipulateString(str, logString) {
     // convert the character to uppercase
     string = str.toUpperCase();

     // Return the logstring with in the console using callback function call
     return logString();
}

function logString(str) {
     console.log(`The manipulated String is: ${string}`);
}

// manipulateString("hello, world!", logString);


// 3. Age in Days.
// Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
// name, and age in years as input. The function should concatenate the first and last name into a single string
// and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
// variable called ageInDays.
// The ageInDays function should then return a callback function that logs a message to the console. The
// message should include the person's full name and age in days, and should be in the format: "The person's full
// name is [full name] and their age in days is [age in days]."
// Note that the ageInDays function should not log the message to the console directly, but should instead return
// a callback function that can be used to log the message at a later time.

// write a function called "ageInDays"
function ageInDays(object) {
     // concatenate first and lastname
     let fullName = object.firstname + " " + object.lastname;
     let ageinday = object.age * 365;

     return function callbackfunc() {
          console.log(`The person's full Name is ${fullName} and their age in days is ${ageinday}`);
     }
}

// Create an object with firstname, lastname and age
let abhi = {
     firstname: "Abhimanyu",
     lastname: "Mahto",
     age: "22"
}

// call the function
// ageInDays(abhi)();

// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

// create a function takes a listofobj 
function AlphaOrder(listObj) {
     // return new list with titles
     let newList = listObj.map((element) => ({title: element.title}));

     return function callback() {
          newList.forEach(element => {
               console.log(element);
          });
     }
}


let a1 = {
     title: "A1Book",
     author: "A1Abhimanyu",
     year: "2020"
}

let a2 = {
     title: "A2Book",
     author: "A2Abhimanyu",
     year: "2022"
}

let a3 = {
     title: "A3Book",
     author: "A3Abhimanyu",
     year: "2023"
}

let arrtest = [a1, a2, a3];

// AlphaOrder(arrtest)();


// 5. Greeting Promise.
// You need to write a function that takes a name as input and returns a promise that resolves with a greeting
// message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
// For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".

function greetPromise(name) {

     return new Promise((resolve, reject) => {
          resolve(`Hello, ${name}`);
     })
}

// greetPromise("Abhimanyu").then(msg => {console.log(msg)});


// 6. Fetch results asynchronously.
// Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

function fetchResult() {
     fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then(response => response.json())
          .then(result => {console.log(result)})
          .catch(error => console.error("Error:", error))
}

// fetchResult();

// 7. Multiple requests.
// Create an asynchronous function that retrieves data from two different API endpoints: "https://
// jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
// a to-do task, while the second API provides post details. The function should combine the results from both APIs
// and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
// responses from the respective APIs.

async function MultipleRequests() {
     try {
          const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
          const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
          let todo = await response1.json();
          let post = await response2.json();

          const combined = {
               todo,
               post
          }
          console.log(combined);
          
     } catch (error) {
          console.log(`Error: ${error}`);
     }
}

// MultipleRequests();



// 8. Get Data from API and Display it on the browser console.
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to
// the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list
// of posts, and then display them to the browser console.

function fetchMethod() {
     fetch("https://jsonplaceholder.typicode.com/posts")
     .then(response => response.json())
     .then(result => {console.log(result)})
     .catch(error => console.log(error));
}

// fetchMethod();


// 9. Error Handling
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors
// that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789
// to simulate an error, and then display an error message on the webpage.

function handleError() {
     fetch("https://jsonplaceholder.typicode.com/posts/123456789")
     .then(result => result.json())
     .then(result => console.log(result))
     .catch(error => console.log("error: ", error));
}

handleError();