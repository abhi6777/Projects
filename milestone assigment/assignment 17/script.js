// Customer object
const customer = {
     name: "",
     balance: 0,
   
     updateBalance: function(amount) {
       this.balance += amount;
     }
   };
   
   // Update customer details on the page
   function updateCustomerDetails() {
     document.getElementById("name").value = customer.name;
     document.getElementById("balance").value = customer.balance;
   }
   
   // Deposit function
   function deposit() {
     const amount = parseFloat(document.getElementById("amount").value);
     if (isNaN(amount) || amount <= 0) {
       alert("Please enter a valid amount.");
       return;
     }
   
     customer.updateBalance(amount);
     updateCustomerDetails();
   }
   
   // Withdraw function
   function withdraw() {
     const amount = parseFloat(document.getElementById("amount").value);
     if (isNaN(amount) || amount <= 0) {
       alert("Please enter a valid amount.");
       return;
     }
   
     if (amount > customer.balance) {
       alert("Insufficient balance.");
       return;
     }
   
     customer.updateBalance(-amount);
     updateCustomerDetails();
   }
   
   // Initialize customer details
   customer.name = "John Doe";
   customer.balance = 1000;
   
   // Update customer details on page load
   updateCustomerDetails();
   