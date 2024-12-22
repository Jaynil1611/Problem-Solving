/**
 * https://takeuforward.org/data-structure/rat-in-a-maze/
 *
 * TC -> 4 ^ (N x M)
 * SC -> O(N x N) + O(N x N)
 */

function findPossiblePaths(
  row,
  col,
  move,
  visited,
  delRow,
  delCol,
  matrix,
  ans,
  n
) {
  if (row === n - 1 && col === n - 1) {
    ans.push(move.slice());
    return;
  }

  const directions = "DLRU";
  for (let i = 0; i < 4; i++) {
    const nrow = row + delRow[i];
    const ncol = col + delCol[i];

    if (
      nrow >= 0 &&
      ncol >= 0 &&
      nrow < n &&
      ncol < n &&
      !visited[nrow][ncol] &&
      matrix[nrow][ncol] === 1
    ) {
      visited[nrow][ncol] = 1;
      findPossiblePaths(
        nrow,
        ncol,
        move + directions[i],
        visited,
        delRow,
        delCol,
        matrix,
        ans,
        n
      );
      visited[nrow][ncol] = 0;
    }
  }
}

function printPossiblePaths(matrix) {
  let move = "";
  const n = matrix.length;
  const ans = [];
  const delRow = [1, 0, 0, -1];
  const delCol = [0, -1, 1, 0];
  const visited = Array.from({ length: n }, () => new Array(n).fill(0));

  findPossiblePaths(0, 0, move, visited, delRow, delCol, matrix, ans, n);
  return ans;
}

const matrix = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
console.log(printPossiblePaths(matrix));
