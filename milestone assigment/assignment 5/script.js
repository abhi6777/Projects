function capitalizeName() {
     const name = document.getElementById("name").value;
     const firstLetter = name[0];
     const capitalizedName = firstLetter.toUpperCase() + name.slice(1);
     document.getElementById("capitalizedName").innerHTML = capitalizedName;
   }
   