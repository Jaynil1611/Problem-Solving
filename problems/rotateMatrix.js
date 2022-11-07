/* Discussion Link: https://github.com/Jaynil1611/Problem-Solving/discussions/7 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const matrixLength = matrix.length;
  if (matrixLength === 1) return matrix;
  let i = 0;
  let j = matrixLength - 1;

  function swapValues(matrix, row1, col1, row2, col2) {
    let temp = matrix[row1][col1];
    matrix[row1][col1] = matrix[row2][col2];
    matrix[row2][col2] = temp;
  }

  function swapRows(matrix, i, j, matrixLength) {
    for (let colIndex = 0; colIndex < matrixLength; colIndex++) {
      swapValues(matrix, i, colIndex, j, colIndex);
    }
  }

  while (j >= 0 && i < j) {
    swapRows(matrix, i, j, matrixLength);
    i++;
    j--;
  }

  for (let rowIndex = 0; rowIndex < matrixLength; rowIndex++) {
    for (let colIndex = 0; colIndex < matrixLength; colIndex++) {
      if (rowIndex < colIndex) {
        swapValues(matrix, rowIndex, colIndex, colIndex, rowIndex);
      }
    }
  }
};
