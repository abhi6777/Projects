var listItems = [
     "Learn HTML",
     "Learn CSS",
     "Learn JavaScript",
     "Learn React",
     "Learn Node.js"
   ];
   
   function addListItem() {
     var newListItem = document.createElement("li");
     newListItem.textContent = listItems.shift();
     document.getElementById("list").appendChild(newListItem);
   
     if (listItems.length === 0) {
       alert("All items have been added!");
     }
   }