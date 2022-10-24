/* LeetCode Question Link: https://leetcode.com/problems/set-matrix-zeroes */
/* LeetCode Solution Link: https://leetcode.com/problems/set-matrix-zeroes/submissions/827404639/ */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let arr_values = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr_values.push(matrix[i][j]);
    }
  }

  function markZero(x, y) {
    for (let j = 0; j < n; j++) {
      matrix[x][j] = 0;
    }
    for (let i = 0; i < m; i++) {
      matrix[i][y] = 0;
    }
  }

  const arrLength = arr_values.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr_values[i] === 0) {
      const x = Math.floor(i / n);
      const y = i % n;
      markZero(x, y);
    }
  }
};
