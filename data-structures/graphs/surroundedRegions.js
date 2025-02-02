/**
 * https://takeuforward.org/graph/surrounded-regions-replace-os-with-xs/
 * SC -> O(N x M)
 * TC -> O(N x M)
 */

function findSurroundedRegions(board) {
  const n = board.length;
  const m = board[0].length;
  const queue = [];
  const visited = Array.from({ length: n }, () => new Array(m).fill(0));
  const delRow = [-1, 0, 1, 0];
  const delCol = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (
        (i === 0 || j === 0 || i === n - 1 || j === m - 1) &&
        board[i][j] === "O"
      ) {
        visited[i][j] = 1;
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    const [row, col] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nrow = row + delRow[i];
      const ncol = col + delCol[i];

      if (
        nrow >= 0 &&
        ncol >= 0 &&
        nrow < n &&
        ncol < m &&
        !visited[nrow][ncol] &&
        board[nrow][ncol] === "O"
      ) {
        visited[nrow][ncol] = 1;
        queue.push([nrow, ncol]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }

  return board;
}

const adjMatrix = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

console.log(findSurroundedRegions(adjMatrix));
