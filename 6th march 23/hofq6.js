function validateLinkedInProfileURL(url) {
     const linkedInURLRegex = /^https:\/\/www.linkedin.com\/in\/[A-Za-z0-9_-]{5,30}[A-Za-z0-9]$/;
   
     if (linkedInURLRegex.test(url)) {
       console.log("The LinkedIn profile URL is valid.");
     } else {
       console.log("The LinkedIn profile URL is not valid.");
     }
   }
   
   // Test the function with some examples
   validateLinkedInProfileURL("https://www.linkedin.com/in/johndoe123");
   validateLinkedInProfileURL("https://www.linkedin.com/in/jane_doe");
   validateLinkedInProfileURL("https://www.linkedin.com/in/some-long-name-with-many-characters");
   validateLinkedInProfileURL("https://www.linkedin.com/in/user@name"); // Invalid URL, contains '@'.
   validateLinkedInProfileURL("https://www.linkedin.com/user123"); // Invalid URL, missing '/in/'.
   validateLinkedInProfileURL("https://www.linkedin.com/in/"); // Invalid URL, missing profile ID.
   validateLinkedInProfileURL("https://www.linkedin.com/in/abc"); // Invalid URL, profile ID too short.
   validateLinkedInProfileURL("https://www.linkedin.com/in/this-is-a-very-long-profile-id-that-exceeds-the-maximum-length"); // Invalid URL, profile ID too long.
   