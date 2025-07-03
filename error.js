function calculateTotal(prices) {
  let total = 0
  for (let i = 0; i <= prices.length; i++) { // ❌ Logical Error: should be i < prices.length
    total += prices[i];                      // ❌ Syntax Error: no semicolon on previous line (optional but stylistic)
  }
  return total;
}

const items = [10, 20, 30];
console.log('Total price is: ' + calculateTotal(item)); // ❌ Syntax Error: 'item' is not defined
