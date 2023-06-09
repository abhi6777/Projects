// Example cart with items
const cart = [
     { unitPrice: 10, quantity: 2 },
     { unitPrice: 5, quantity: 3 },
     { unitPrice: 8, quantity: 1 },
   ];
   
   const calculateTotal = () => {
     const output = document.getElementById("output");
   
     // Calculate total cost
     const totalCost = cart.reduce((total, item) => {
       const itemCost = item.unitPrice * item.quantity;
       return total + itemCost;
     }, 0);
   
     output.textContent = "Total Cost: Rs. " + totalCost.toFixed(2);
   };
   