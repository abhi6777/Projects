// HOF and function programming

// 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.

function reverseString(input) {
     let reversedString = "";
     for (let i = input.length - 1; i >= 0; i--) {
       reversedString += input[i];
     }
     return reversedString;
   }
   
   const input = "Hello, world!";
   
   setTimeout(() => {
     console.log(reverseString(input));
   }, 2000);
   