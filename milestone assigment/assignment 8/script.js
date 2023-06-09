function generatePattern() {
     var rowInput = document.getElementById("rowInput");
     var patternContainer = document.getElementById("patternContainer");
   
     var i = parseInt(rowInput.value, 10);
   
     var pattern = '';
     for (var row = i; row >= 1; row--) {
       for (var col = 1; col <= row; col++) {
         pattern += '*';
       }
       pattern += '\n';
     }
   
     patternContainer.textContent = pattern;
   }
   