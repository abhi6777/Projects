function checkPasswords() {
  // Get the values of the password and confirm password fields
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Check if the passwords match
  if (password === confirmPassword) {
    // The passwords match, so log a success message
    console.log("Password Matched. Password validation Successful.");
  } else {
    // The passwords don't match, so log an error message
    console.log("Password didn't match. Password validation unsuccessful.");
  }
}
