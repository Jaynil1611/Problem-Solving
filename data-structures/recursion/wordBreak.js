/**
 * https://leetcode.com/problems/word-break/
 * TC -> O(N x M x K)  m -> dict length, k -> substring time
 * SC -> O(N)
 */

function wordBreak(string, dict) {
  const n = string.length;
  if (n === 0) return false;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let word of dict) {
      const start = i - word.length;
      const substring = string.substring(start, i);
      if (start >= 0 && dp[start] && substring === word) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}

const dict = ["cats", "dog", "sand", "and", "cat"];
const input = "catsanddog";
console.log(wordBreak(input, dict));
