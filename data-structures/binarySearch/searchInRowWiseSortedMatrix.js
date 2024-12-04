/**
 * https://takeuforward.org/arrays/search-in-a-row-and-column-wise-sorted-matrix/
 * TC ->
 * SC ->
 *
 * Stan at either top right corner or bottom left corner from which the
 * column elements will be decreasing & row elements will be increasing.
 * This will allow us to eliminate either row or col in each iteration
 */

function searchInRowWiseSortedMatrix(matrix, target) {
  const n = matrix.length;
  const m = matrix[0].length;

  let row = 0;
  let col = m - 1;

  while (row < n && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    }
    if (matrix[row][col] < target) {
      row++;
    } else {
      col--;
    }
  }
  return false;
}

const matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];
const target = 29;
console.log(searchInRowWiseSortedMatrix(matrix, target));
