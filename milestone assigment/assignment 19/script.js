// Function to validate email and password
function validateForm(event) {
     event.preventDefault(); // Prevent form submission
   
     var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;
     var errorMessage = document.getElementById("message");
   
     // Check email format
     if (email.indexOf("@") === -1) {
       errorMessage.innerText = "Invalid email or password!";
       errorMessage.style.color = "red";
       return;
     }
   
     // Check password length
     if (password.length < 8) {
       errorMessage.innerText = "Invalid email or password!";
       errorMessage.style.color = "red";
       return;
     }
   
     // If email and password are valid
     errorMessage.innerText = "Valid email and password!";
     errorMessage.style.color = "green";
   }
   
   // Attach submit event listener to the form
   var loginForm = document.getElementById("loginForm");
   loginForm.addEventListener("submit", validateForm);
   