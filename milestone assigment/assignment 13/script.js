function calculateBill() {
     var dish1CostInput = document.getElementById("dish1Cost");
     var dish2CostInput = document.getElementById("dish2Cost");
     var dish3CostInput = document.getElementById("dish3Cost");
     var numberOfPeopleInput = document.getElementById("numberOfPeople");
     var output = document.getElementById("output");
   
     var dish1Cost = parseFloat(dish1CostInput.value);
     var dish2Cost = parseFloat(dish2CostInput.value);
     var dish3Cost = parseFloat(dish3CostInput.value);
     var numberOfPeople = parseInt(numberOfPeopleInput.value, 10);
   
     if (isNaN(dish1Cost) || isNaN(dish2Cost) || isNaN(dish3Cost) || isNaN(numberOfPeople)) {
       output.textContent = "Invalid input. Please enter valid numbers.";
       return;
     }
   
     var totalBill = dish1Cost + dish2Cost + dish3Cost;
     var billPerPerson = totalBill / numberOfPeople;
   
     var billData = {
       totalBill: totalBill.toFixed(2),
       billPerPerson: billPerPerson.toFixed(2)
     };
   
     output.textContent = "Total Bill: Rs. " + billData.totalBill + "\nBill Per Person: Rs. " + billData.billPerPerson;
   }
   