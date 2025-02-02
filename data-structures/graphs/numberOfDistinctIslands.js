/**
 * https://www.geeksforgeeks.org/problems/number-of-distinct-islands/1
 * SC -> O(N x M)
 * TC -> Matrix loop x set insertion + DFS 4 neighbours 
 * TC -> O(N x M x log(N x M)) + O(N x M x 4)
 */

function numberOfDistinctIslands(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const visited = Array.from({ length: n }, () => new Array(m));
  const islandsSet = new Set();
  const delRow = [-1, 0, 1, 0];
  const delCol = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        const coordinates = [];
        depthFirstSearch(
          i,
          j,
          grid,
          visited,
          coordinates,
          i,
          j,
          n,
          m,
          delRow,
          delCol
        );
        islandsSet.add(coordinates.toString());
      }
    }
  }

  return islandsSet.size;
}

function depthFirstSearch(
  row,
  col,
  grid,
  visited,
  coordinates,
  baseRow,
  baseCol,
  n,
  m,
  delRow,
  delCol
) {
  visited[row][col] = 1;
  coordinates.push([row - baseRow, col - baseCol]);

  for (let i = 0; i < 4; i++) {
    const nrow = row + delRow[i];
    const ncol = col + delCol[i];

    if (
      nrow >= 0 &&
      ncol >= 0 &&
      nrow < n &&
      ncol < m &&
      grid[nrow][ncol] === "1" &&
      !visited[nrow][ncol]
    ) {
      depthFirstSearch(
        nrow,
        ncol,
        grid,
        visited,
        coordinates,
        baseRow,
        baseCol,
        n,
        m,
        delRow,
        delCol
      );
    }
  }
}

const grid = [
  ["1", "1", "0", "1", "1"],
  ["1", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "1"],
  ["1", "1", "0", "1", "1"],
];

console.log(numberOfDistinctIslands(grid));
