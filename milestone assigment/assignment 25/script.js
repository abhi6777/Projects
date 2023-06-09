// Get the image element
var image = document.getElementById("image");

// Set the initial position of the image
var topPosition = 0;
var leftPosition = 0;

// Function to move the image
function moveImage(event) {
  var key = event.keyCode;

  // Move image based on the arrow keys
  switch (key) {
    case 38: // Arrow Up
      topPosition -= 10;
      break;
    case 40: // Arrow Down
      topPosition += 10;
      break;
    case 37: // Arrow Left
      leftPosition -= 10;
      break;
    case 39: // Arrow Right
      leftPosition += 10;
      break;
  }

  // Update the position of the image
  image.style.top = topPosition + "px";
  image.style.left = leftPosition + "px";
}

// Attach keydown event listener to the document
document.addEventListener("keydown", moveImage);
