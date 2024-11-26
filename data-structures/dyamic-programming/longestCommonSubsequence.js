/**
 * https://takeuforward.org/data-structure/longest-common-subsequence-dp-25/
 * TC -> O(NxM)
 * SC -> O(M)
 */

function longestCommonSubsequenceOptimised(s, t) {
  const n = s.length;
  const m = t.length;
  let prev = new Array(m + 1).fill(0);
  const curr = new Array(m + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] === t[j - 1]) {
        curr[j] = 1 + prev[j - 1];
      } else {
        curr[j] = Math.max(prev[j], curr[j - 1]);
      }
    }
    prev = curr;
  }
  return prev[m];
}

function longestCommonSubsequence(s, t) {
  const n = s.length;
  const m = t.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 0;
  }

  for (let j = 0; j <= m; j++) {
    dp[0][j] = 0;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const ans = printLCS(dp, s, t);

  return [dp[n][m], ans];
}

function printLCS(dp, s, t) {
  const n = s.length;
  const m = t.length;
  const maxLength = dp[n][m];

  let i = n,
    j = m,
    index = maxLength - 1;
  let ans = new Array(index);

  while (i > 0 && j > 0) {
    if (s[i - 1] === t[j - 1]) {
      ans[index] = s[i - 1];
      i--;
      j--;
      index--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  return ans.join("");
}

const string1 = "awfecd";
const string2 = "bassfecd";
console.log(longestCommonSubsequence(string1, string2));
