// Task 1
let purchaseAmount = 150;
let finalAmount = purchaseAmount;

if (purchaseAmount > 100) {
  discount = 0.10;
}

let finalAmount = purchaseAmount - (purchaseAmount * discount);

consol.log('Final amount after discount: $${finalAmount.toFixed(2)}');
