/**
 * https://takeuforward.org/data-structure/grid-unique-paths-dp-on-grids-dp8/
 * TC -> O(N)
 * SC -> O(1)
 */

function uniquePathsSpaceOptimised(n, m) {
  let prev = new Array(m);

  for (let i = 0; i < n; i++) {
    const curr = new Array(m);
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        curr[j] = 1;
      } else {
        let up = 0;
        let left = 0;
        if (i > 0) up = prev[j];
        if (j > 0) left = curr[j - 1];
        curr[j] = up + left;
      }
    }
    prev = curr;
  }
  return prev[m - 1];
}

function uniquePaths(n, m) {
  const dp = Array.from({ length: n }, () => new Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
      } else {
        let up = 0;
        let left = 0;
        if (i > 0) up = dp[i - 1][j];
        if (j > 0) left = dp[i][j - 1];
        dp[i][j] = up + left;
      }
    }
  }
  return dp[n - 1][m - 1];
}

const n = 3;
const m = 2;
console.log(uniquePaths(n, m));
