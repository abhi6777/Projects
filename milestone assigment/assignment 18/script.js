function toggleHeadingText() {
     var heading = document.querySelector("h1");
     if (heading.textContent === "The most affordable learning platform") {
       heading.textContent = "PW Skills";
     } else {
       heading.textContent = "The most affordable learning platform";
     }
   }