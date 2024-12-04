/**
 * https://takeuforward.org/data-structure/search-in-a-sorted-2d-matrix/
 * TC -> O()
 * SC -> O()
 */

function searchIn2DMatrix(matrix, target) {
  const n = matrix.length;
  const m = matrix[0].length;
  let low = 0;
  let high = n * m - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    const row = Math.floor(mid / m);
    const col = mid % m;
    if (matrix[row][col] === target) {
      return true;
    }
    if (matrix[row][col] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(searchIn2DMatrix(matrix, 10));
