/* Discussion Link: https://github.com/Jaynil1611/Problem-Solving/discussions/10 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rowLength = matrix.length;
  const columnLength = matrix[0].length;

  function searchMatrix(matrix, left, right) {
    if (left > right) {
      return false;
    }
    const mid = Math.floor((left + right) / 2);
    const x = Math.floor(mid / columnLength);
    const y = mid % columnLength;
    const element = matrix[x][y];

    if (element === target) {
      return true;
    }
    if (element > target) {
      return searchMatrix(matrix, left, mid - 1);
    }
    return searchMatrix(matrix, mid + 1, right);
  }
  const lastElementIndex = rowLength * columnLength - 1;
  return searchMatrix(matrix, 0, lastElementIndex);
};
