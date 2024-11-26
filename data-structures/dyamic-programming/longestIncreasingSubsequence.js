/**
 *  https://takeuforward.org/data-structure/longest-increasing-subsequence-dp-41/
 * TC -> O(N x N)
 * SC -> O(N)
 * Link: https://youtu.be/IFfYfonAFGc
 */

function longestIncreasingSubsequence(array) {
  const dp = new Array(array.length).fill(1);
  let maxLength = 1;

  for (let i = 0; i < array.length; i++) {
    for (let prev = 0; prev < i; prev++) {
      if (array[i] > array[prev]) {
        dp[i] = Math.max(dp[i], 1 + dp[prev]);
      }
    }
    maxLength = Math.max(maxLength, dp[i]);
  }
  return maxLength;
}

const input = [5, 4, 11, 1, 16, 8];
console.log(longestIncreasingSubsequence(input));
