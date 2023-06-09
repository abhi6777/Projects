function countVowels() {
     const name = document.getElementById("name").value;
     let vowelCount = 0;
     for (let i = 0; i < name.length; i++) {
       if (/[aeiou]/.test(name[i])) {
         vowelCount++;
       }
     }
     document.getElementById("vowelCount").innerHTML = "The number of vowels in " + name + " is " + vowelCount;
   }