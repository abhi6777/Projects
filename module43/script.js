// Question no 1
// 1. Count the occurrences.
// You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
// assume that the string only contains alphabetic characters and spaces.

// Create the function  takes a string str and word 
function wordOccurence(str, word) {
     // change the words to lowercase
     const words = str.toLowerCase().split(" ");

     // filter the words 
     const result = words.filter(w => w === word.toLowerCase()); 

     console.log(result);

     // return occurence of the word
     return result.length;
}

// Question no 2
// 2. Only unique items are allowed.
// You are building a program that takes an array of numbers as input and you need to remove all the duplicates
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
// contains only the unique elements.

// Create the function takes an array of numbers as input and remove all the duplicates
function removeDuplicates(arr) {
     // create a new set
     const unique = new Set(arr);

     // return the unique elements
     return unique;
}

const findWord  = `my name is abhimanyu kumar mahto and i live at nimatand near suriya jharkhan i study Bca from Lpu university punjab `;

// console.log(wordOccurence(findWord, 'i'));    // Question no 1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];
// console.log(removeDuplicates(numbers)); // Question no 2

// 3. Swap the values.
// You are working on a project that requires you to swap the values of two variables without using a temporary
// variable. You decide to write a function that takes two variables as input and swaps their values using
// destructuring assignment with an array. The function should take the two variables as arguments, destructure
// them into an array, and then swap their positions within the array. Finally, the function should return an array
// with the swapped values. For example, if the function is called with the arguments x = 5 and y = 10, it should
// return an array [10, 5] with x now equal to 10 and y equal to 5.

// create the function with two arugments and swap the values
function swapValues(x, y) {
     // swap the values
     [x, y] = [y, x];

     // return the swapped values
     return [x, y];
}

// console.log(swapValues(5, 10)); // Question no 3    

// Question no 4 
// 4. Access random elements.
// You are building a program that takes an array of numbers as input and you need to extract the first, second,
// and last elements of the array. You decide to write a function that can accomplish this task using destructuring
// assignment with an array. The function should take the array as an argument, destructure it into three variables
// representing the first, second, and last elements, and then return an array with these three values. For example,
// if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5].

function AccessRandomElements(arr) {
     // destructuring the first, second and the last elements 
     const [first, second, ...rest] = arr;
     const last = arr[arr.length - 1]; // get the last element of the array

     return [first, second, last];
}

let randomElements = [1, 2, 3, 4, 5];
// console.log(AccessRandomElements(randomElements));

// 5. Min and max values.
// You are building a program that needs to find the maximum and minimum values in an array of numbers. You
// decide to write a function that can accomplish this task by taking an array of numbers as input and using the
// spread operator with the Math methods max() and min(). The function should return an object with two
// properties, max, and min, representing the maximum and minimum values in the input array, respectively. For
// example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 }.

// fuction to find min and max in array
// take array as argument
function minAndMax(arr) {
     let min = Math.min(...arr);
     let max = Math.max(...arr);

     return obj = {min, max};
}

let arr = [1,2,4,5,6,2,5];
// console.log(minAndMax(arr));

// 6. Nested Objects.
// Write a function that takes an object representing a person as input, and extracts the name and street
// properties from a nested object using object destructuring. The function should return an object with these two
// properties. A sample object is given below.


// function takes object as parameter
function nestedObject({name, address: {street}}) {

     return {name, street};
}

const obj = {
     name: "mithun",
     age: 21,
     address: {
          street: "rajdhanwar rod ",
          city: "chadigarh",
          state: "Goa"
     }
}

console.log(nestedObject(obj));