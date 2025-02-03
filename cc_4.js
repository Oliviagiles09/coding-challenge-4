// Task 1
let purchaseAmount = 150;
let finalAmount = purchaseAmount;

if (purchaseAmount > 100) {
  discount = 0.10;
}

let finalAmount = purchaseAmount - (purchaseAmount * discount);

consol.log('Final amount after discount: $${finalAmount.toFixed(2)}');

// Task 2
let sales = [120, 85, 200, 150, 90];

let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
  totalSales += sales [i];
}

consol.log('Total sales: $${totalSales}');

// Task 3 
let stock = 10;

while (stock > 0) {
  consol.log('Stock remaining: ${stock}');
  stock--;
}

consol.log("Stock is zero.");

// Task 4 
let responses = 0;

do {
  consol.log('Responce count: ${responces}');
  responses++;
} while responses < 3);

consol.log("Collected 3 responses.");

// Task 5
let employee = {
  name: "Natalie",
  position: "Manager",
  Salary: 75000
};

for (let key in employee) {
  consol.log('${key}: ${employee[key]}');
}

