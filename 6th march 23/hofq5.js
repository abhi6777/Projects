function validateURL(input) {
     const urlRegex = /^(http:\/\/|https:\/\/)[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=]+[.][A-Za-z]+$/;
   
     if (urlRegex.test(input)) {
       console.log("The URL is valid.");
     } else {
       console.log("The URL is not valid.");
     }
   }
   
   // Test the function with some examples
   validateURL("http://www.example.com");
   validateURL("https://www.example.com");
   validateURL("https://subdomain.example.com");
   validateURL("http://example123.com");
   validateURL("https://example.com123");
   validateURL("https://example..com"); // Invalid URL, as two dots appear consecutively.
   