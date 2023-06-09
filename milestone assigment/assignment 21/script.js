// Function to add a new TODO item
function addTodoItem() {
     var todoInput = document.getElementById("todoInput");
     var todoList = document.getElementById("todoList");
   
     var newItemText = todoInput.value;
     if (newItemText === "") {
       alert("Please enter a task!");
       return;
     }
   
     var newItem = document.createElement("li");
     newItem.innerText = newItemText;
   
     // Add click event listener to mark item as completed
     newItem.addEventListener("click", function() {
       newItem.classList.toggle("completed");
     });
   
     todoList.appendChild(newItem);
     todoInput.value = "";
   }
   
   // Attach click event listener to the add button
   var addButton = document.getElementById("addButton");
   addButton.addEventListener("click", addTodoItem);
   