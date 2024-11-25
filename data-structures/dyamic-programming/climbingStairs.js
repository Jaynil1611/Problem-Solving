/**
 * https://takeuforward.org/data-structure/dynamic-programming-climbing-stairs/
 * TC -> O(N)
 * SC -> O(1)
 */

function climbStairs(n) {
  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

function climbStairsSpaceOptimized(n) {
  let prev = 1;
  let prev2 = 1;
  for (let i = 2; i <= n; i++) {
    const curr = prev + prev2;
    prev2 = prev;
    prev = curr;
  }
  return prev;
}

console.log(climbStairs(4))