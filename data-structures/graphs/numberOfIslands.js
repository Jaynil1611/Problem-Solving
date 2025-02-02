/* 
https://takeuforward.org/data-structure/number-of-islands/ 
TC -> O(N^2)
SC -> O(N^2)
*/

function numberOfIslands(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const visited = Array.from({ length: n }, () => new Array(m).fill(0));
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        depthFirstSearch(i, j, grid, visited, n, m);
        result++;
      }
    }
  }

  console.log(result);
}

function depthFirstSearch(row, col, grid, visited, n, m) {
  visited[row][col] = 1;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const nrow = row + i;
      const ncol = col + j;
      if (
        nrow >= 0 &&
        ncol >= 0 &&
        nrow < n &&
        ncol < m &&
        grid[nrow][ncol] === "1" &&
        !visited[nrow][ncol]
      ) {
        depthFirstSearch(nrow, ncol, grid, visited, n, m);
      }
    }
  }
}

const grid = [
  ["0", "1", "1", "0"],
  ["0", "1", "1", "0"],
  ["0", "0", "0", "0"],
  ["1", "1", "1", "0"],
  ["1", "0", "0", "1"],
];

numberOfIslands(grid);
