// Get the paragraph element
var paragraph = document.getElementById("paragraph");

// Split the text into an array of words
var words = paragraph.innerText.split(" ");

// Loop through each word
for (var i = 0; i < words.length; i++) {
  var word = words[i];
  
  // Check if the word's length is greater than 8 characters
  if (word.length > 8) {
    // Create a new span element and set its class to "highlight"
    var span = document.createElement("span");
    span.className = "highlight";
    
    // Set the text content of the span to the word
    span.innerText = word;
    
    // Replace the word in the original array with the span element
    words[i] = span.outerHTML;
  }
}

// Update the paragraph's HTML with the modified words array
paragraph.innerHTML = words.join(" ");
