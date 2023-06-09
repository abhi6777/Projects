document.addEventListener("DOMContentLoaded", function() {
     var cart = document.getElementById("cart");
     var cartWithoutDuplicates = document.getElementById("cartWithoutDuplicates");
   
     var cartItems = Array.from(cart.getElementsByTagName("li"));
     var uniqueItems = Array.from(new Set(cartItems.map(item => item.textContent)));
   
     uniqueItems.forEach(function(itemText) {
       var listItem = document.createElement("li");
       listItem.textContent = itemText;
       cartWithoutDuplicates.appendChild(listItem);
     });
   });
   