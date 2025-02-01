/**
 * https://takeuforward.org/data-structure/spiral-traversal-of-matrix/
 *
 * TC -> O(MxN)
 * SC -> O(MxN)
 */

function spiralMatrix(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const ans = [];

  let top = 0,
    left = 0,
    right = n - 1,
    bottom = m - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
      left++;
    }
  }
  return ans;
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(spiralMatrix(matrix));
