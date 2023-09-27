function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  // Change code above this line
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));