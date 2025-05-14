// Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call the
// function before it is declared to demonstrate hoisting@

let num1 = 555;
let num2 = 123;
// addNumbers(num1, num2);
function addNumbers(num1, num2) {
  return console.log(num1 + num2);
}

// Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product.
// Use function expressions to define the function and call the function before it is declared to demonstrate
// hoisting@


let hello = function multiplyNumbers(num1, num2) {
     return console.log(num1 * num2);
}

// hello(234, 432);

// Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the
// function using the var keyword and log its value to the console before it is assigned a value to demonstrate
// variable hoisting@

function sumTwo(num1, num2) {
     console.log(num);
     var num = 23 ;
     return console.log(num1 + num2);
}

// sumTwo(45, 23);

// 5  Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting@


{
     // console.log(one, two, three);
     var one = 1;
     let two = 2;
     const three = 3;
     // console.log(one, two, three);
}
