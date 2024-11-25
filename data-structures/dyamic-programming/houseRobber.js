/**
 * Similar to Maximum Sum of Non Adjacent Elements
 * https://takeuforward.org/data-structure/dynamic-programming-house-robber-dp-6/
 * TC -> O(N)
 * SC -> O(1)
 */

function findMaximumMoneySpaceOptimised(array, N) {
  let prev = array[0];
  let prev2 = 0;
  for (let i = 1; i < N; i++) {
    let take = array[i];
    if (i > 1) take += prev2;
    const notTake = prev;
    const curr = Math.max(take, notTake);
    prev2 = prev;
    prev = curr;
  }
  return prev;
}

function findMaximumMoney(array, N) {
  const dp = new Array(N);
  dp[0] = array[0];
  for (let i = 1; i < N; i++) {
    let take = array[i];
    if (i > 1) take += dp[i - 2];
    const notTake = dp[i - 1];
    dp[i] = Math.max(take, notTake);
  }
  return dp[N - 1];
}

function houseRobber(array) {
  const N = array.length;

  const takeFirst = findMaximumMoney(array, N - 1);

  const takeLast = findMaximumMoney(array.slice(1), N - 1);

  return Math.max(takeFirst, takeLast);
}

const arr = [1, 5, 1, 2, 6];
console.log(houseRobber(arr));
