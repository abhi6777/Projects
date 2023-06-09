function calculateRentalCost() {
     var daysInput = document.getElementById("daysInput");
     var carTypeSelect = document.getElementById("carTypeSelect");
     var output = document.getElementById("output");
   
     var rentalCost = 0;
     var daysRented = parseInt(daysInput.value, 10);
     var carType = carTypeSelect.value;
   
     switch (carType) {
       case "economy":
         rentalCost = 4000;
         break;
       case "midsize":
         rentalCost = 15000;
         break;
       case "luxury":
         rentalCost = 25000;
         break;
       default:
         output.textContent = "Invalid car type";
         return;
     }
   
     var totalCost = rentalCost * daysRented;
     output.textContent = "Total Rental Cost: Rs. " + totalCost;
   }
   