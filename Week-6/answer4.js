// Best time to buy and sell stock

function maxProfit(prices, size) {
  let max_profit = 0;
  let buy = prices[0];
  for (let i = 0; i < size; i++) {
    if (buy > prices[i]) buy = prices[i];
    else if (prices[i] - buy > max_profit) {
      max_profit = prices[i] - buy;
    }
  }
  return max_profit;
}

let prices = [7, 1, 5, 3, 20, 4];
let size = prices.length;
let ans = maxProfit(prices, size);
console.log(ans);
