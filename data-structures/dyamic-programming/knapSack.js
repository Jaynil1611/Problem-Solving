/**
 * https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
 * TC -> O(N x W)
 * SC -> O(W)
 */

function knapSack(W, wt, val, n) {
  // Making and initializing dp array
  var dp = Array(W + 1).fill(0);

  for (let i = 0; i < n; i++) {
    for (let w = W; w >= 0; w--) {
      if (wt[i] <= w)
        // Finding the maximum value
        dp[w] = Math.max(dp[w], dp[w - wt[i]] + val[i]);
    }
  }

  // Returning the maximum value of knapsack
  return dp[W];
}

var profit = [60, 100, 120];
var weight = [10, 20, 30];
var W = 60;
var n = profit.length;
console.log(knapSack(W, weight, profit, n));
