// 1. Type Conversion.
// Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.

function convertToNumber(str) {
     try {
          let num = Number(str);
          if(isNaN(num)) {
               throw new Error("Invalid number");
               
          }
          return num;
     } catch(err) {
          return err.message;
     }
}

// console.log(convertToNumber(`123da4`)); // "Invalid number"
// console.log(convertToNumber(`123`));    // 123

// 2. Building Robust Functions in JavaScript
// Create a function called getPerson that takes an object as a parameter representing a person's name and age.
// The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
// However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
// an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
// message if it occurs.

function getPerson(obj) {
     try {
          if(typeof obj !== 'object' || !obj.name || !obj.age) {
               throw new Error(`Invalid parameter type`);
          }

          return console.log(`Name: ${obj.name}, Age: ${obj.age}`);
     } catch (err) {
          console.log(`${err.message}`);
     }
}

const me = {
     name: "Abhimanyu",
     age: "21"
}

// getPerson(me);

const meInvalid = {
     name: "Abhimanyu",
}

// getPerson(meInvalid);


// 3. Car Description Class.
// Create a class called Car with three properties: company, model, and year. The class should have a method
// called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
// instance of the Car class and call the getDescription method.

class Car {
     constructor(company, model, year) {
          this.company = company,
          this.model = model,
          this.year = year
     }

     getDescription() {
          return `This is a ${this.year} ${this.company} ${this.model}. `;
     }
}

const car1 = new Car("Tata", "Nexon", 2025);
// console.log(car1.getDescription());

const car2 = new Car("Maruti", "Swift", 2024);
// console.log(car2.getDescription());


// 4. Employee Class Challenge.
// Create a class called Employee with three properties: name, position, and salary. The class should have a
// method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
// call the getSalary method.

class Employee {
     constructor(name, position, salary) {
          this.name = name,
          this.position = position,
          this.salary = salary
     }

     get Salary() {
          return this.salary;
     }
}

let emp1 = new Employee("mohan", "Accountata", "25000");
// console.log(emp1.Salary);  //  used getters instead of method

// 5. Implementing a Person Class with Default Values
// Create a class called Person with two properties: name and age. The class should have a method called
// getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
// constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

class Person{
     constructor(name = "Unknown", age = "0") {
          this.name = name, 
          this.age = age
     }

     get details() {
          return `${this.name}, ${this.age}`;
     }
}

let per1 = new Person();
// console.log(per1.details);

let per2 = new Person("abhimanyu", "21");
// console.log(per2.details);

// 6. Using Static Method to Add Two Numbers with Calculator Class
// Create a class called Calculator with a static method called add. The add method should take two numbers as
// arguments and return their sum. Instantiate the Calculator class and call the add method.

class Calculator{

     static add(num1, num2) {
          return (num1 + num2);
     }
}

let cal1 = new Calculator();

// console.log(Calculator.add(3564648, 500));


// 7. Password Checker.
// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.

class User{
     #password
     constructor(username, password) {
          this.username = username,
          this.password = password
     }

     get password() {
          return this.#password;
     }
  
      set password(pass) {
          if (pass.length >= 8 && /[0-9]/.test(pass) && /[A-Z]/.test(pass)) {
              this.#password = pass;
          } else {
              console.error("Password does not meet the requirement");
          }
     }
}

// let user1 = new User("Abhimanyu", "Abhimanyu@1234");
// console.log(user1.password);

// user1.password = "abhimanyu";
// console.log(user1.password);


// 8. Adding a Method to a Prototype.
// Create a prototype object called Student with a property name. Add a method called printDetails to the
// prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
// name "Mithun" and call the printDetails method.

class Student{
     constructor(name) {
          this.name = name;
     } 

     printDetails() {
          console.log(`Hello, my name is ${this.name}`)
     }
}

let Stud1 = new Student("Mithun");

// Stud1.printDetails();

// 9. Check the presence using closures.
// Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
// returned function should take another number as an argument and return true if the number is in the array, and
// false otherwise.

function numberChecker(arr) {
     return function (num) {
          for (let index = 0; index < arr.length; index++) {
               if(num == arr[index]) {
                    return true;
               }               
          }
          return false;
     }
}

let arr = [1, 5, 6, 2, 123, 64, 63, 73, 23, 5, 63, 23];

// console.log(numberChecker(arr)(2000));


// 10. Filter by Category.
// Write a function that takes an array of products and returns a function that filters the array by a given product
// category. The function must filter an eCommerce products array by a specific category. The closure filters
// products using the filter() method. Finally, it returns a new array containing only the products with the same
// category as the input.

function ProductsArray(arr) {
     return function (category) {
          return arr.filter(product => product.category === category);
     }
}

const products = [
     { name: "Phone", category: "Electronics" },
     { name: "Shirt", category: "Clothing" },
     { name: "Laptop", category: "Electronics" },
     { name: "Shoes", category: "Clothing" }
 ];
 
 const filterByCategory = ProductsArray(products);
 
 console.log(filterByCategory("Electronics"));  // Filters products by "Electronics" category