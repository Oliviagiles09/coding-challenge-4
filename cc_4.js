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
