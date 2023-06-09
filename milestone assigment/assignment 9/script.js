function printNumbers() {
     // Get the numbers from the input.
     var numbers = document.getElementById("numbers").value;
   
     // Split the numbers into an array.
     var numArray = numbers.split(" ");
   
     // Create a new div to store the results.
     var resultsDiv = document.getElementById("results");
   
     // Iterate through the numbers and print the ones that are divisible by 3, but not by 2.
     for (var i = 0; i < numArray.length; i++) {
       var num = numArray[i];
   
       // Check if the number is divisible by 3, but not by 2.
       if (num % 3 == 0 && num % 2 != 0) {
         resultsDiv.innerHTML += num + " ";
       }
     }
   }
   
   document.getElementById("print").addEventListener("click", printNumbers);
   