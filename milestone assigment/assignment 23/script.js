// Array of colors
var colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"];

// Function to change the background color
function changeBackgroundColor() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  var randomColor = colors[randomIndex];
  document.body.style.backgroundColor = randomColor;
}

// Attach click event listener to the button
var colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", changeBackgroundColor);
