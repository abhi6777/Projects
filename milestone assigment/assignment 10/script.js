function doubleCartQuantity() {
     var cart = [1, 2, 3, 4, 5];
     var doubledCart = cart.map(function(quantity) {
       return quantity * 2;
     });
   
     var output = document.getElementById("output");
     output.textContent = "Doubled Cart Quantity: " + doubledCart.join(", ");
   }
   