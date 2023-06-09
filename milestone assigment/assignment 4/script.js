function findHighestMark() {
     const marks = [
       parseInt(document.getElementById("mark1").value),
       parseInt(document.getElementById("mark2").value),
       parseInt(document.getElementById("mark3").value),
       parseInt(document.getElementById("mark4").value),
       parseInt(document.getElementById("mark5").value)
     ];
   
     let highestMark = marks[0];
     for (let i = 1; i < marks.length; i++) {
       if (marks[i] > highestMark) {
         highestMark = marks[i];
       }
     }
   
     document.getElementById("highestMark").innerHTML = "The highest mark is " + highestMark;
   }
   