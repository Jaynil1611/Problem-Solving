/**
 * https://leetcode.com/problems/word-search
 *
 * TC -> O(M x N x 4^l)
 * SC -> O(l) where l is word.length
 */

const delRow = [0, 1, 0, -1];
const delCol = [-1, 0, 1, 0];

function dfs(board, word, row, col, m, n, index) {
  if (index === word.length) {
    return true;
  }

  if (
    row < 0 ||
    row >= m ||
    col < 0 ||
    col >= n ||
    board[row][col] === 0 ||
    board[row][col] !== word[index]
  ) {
    return false;
  }

  const temp = board[row][col];
  board[row][col] = 0;

  for (let i = 0; i < 4; i++) {
    const newRow = row + delRow[i];
    const newCol = col + delCol[i];

    if (dfs(board, word, newRow, newCol, m, n, index + 1)) {
      return true;
    }
  }
  board[row][col] = temp;
  return false;
}

function wordSearch(board, word) {
  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(board, word, i, j, m, n, 0)) {
        return true;
      }
    }
  }
  return false;
}

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCCED";
console.log(wordSearch(board, word));
