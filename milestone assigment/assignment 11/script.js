function convertTemperature() {
     var celsiusInput = document.getElementById("celsiusInput");
     var celsius = parseFloat(celsiusInput.value);
   
     var fahrenheit = (celsius * 9/5) + 32;
   
     var output = document.getElementById("output");
     output.textContent = "Temperature in Fahrenheit: " + fahrenheit.toFixed(2);
   }
   