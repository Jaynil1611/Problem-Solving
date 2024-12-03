/**
 * https://takeuforward.org/data-structure/set-matrix-zero/
 * TC -> O(N x M)
 * SC -> O(1)
 */

function setMatrixZeros(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  let col0 = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;

        if (j !== 0) {
          matrix[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] !== 0) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let i = 0; i < m; i++) {
      matrix[0][i] = 0;
    }
  }
  if (col0 === 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
}

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log(setMatrixZeros(matrix));
