/**
 * https://takeuforward.org/data-structure/coin-change-2-dp-22/
 * TC -> O(NxT)
 * SC -> O(T)
 */

function coinChangeOptimised(array, N, T) {
  let prev = new Array(T + 1).fill(0);
  const curr = new Array(T + 1).fill(0);

  for (let target = 0; target <= T; target++) {
    prev[target] = Number(target % array[0] === 0);
  }

  for (let i = 1; i < N; i++) {
    for (let target = 0; target <= T; target++) {
      let take = 0;
      const notTake = prev[target];
      if (array[i] <= target) {
        take = curr[target - array[i]];
      }
      curr[target] = take + notTake;
    }
    prev = curr;
  }
  return prev[T];
}

function coinChange(array, N, T) {
  const dp = Array.from({ length: N }, () => new Array(T + 1).fill(0));

  for (let target = 0; target <= T; target++) {
    dp[0][target] = Number(target % array[0] === 0);
  }

  for (let i = 1; i < N; i++) {
    for (let target = 0; target <= T; target++) {
      let take = 0;
      const notTake = dp[i - 1][target];
      if (array[i] <= target) {
        take = dp[i][target - array[i]];
      }
      dp[i][target] = take + notTake;
    }
  }
  return dp[N - 1][T];
}

const arr = [1, 2, 3];
const target = 4;
const n = arr.length;
console.log(coinChangeOptimised(arr, n, target));
