/**
 * https://takeuforward.org/graph/distance-of-nearest-cell-having-1/
 * SC -> O(N x M)
 * TC -> O(N x M)
 */

function updateMatrix(mat) {
  const n = mat.length;
  const m = mat[0].length;
  const distance = Array.from({ length: n }, () => new Array(m).fill(-1));
  const queue = [];
  const delRow = [-1, 0, 1, 0];
  const delCol = [0, -1, 0, 1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 1) {
        queue.push([i, j, 0]);
        distance[i][j] = 0;
      }
    }
  }

  while (queue.length) {
    const [row, col, step] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nrow = row + delRow[i];
      const ncol = col + delCol[i];
      if (
        nrow >= 0 &&
        ncol >= 0 &&
        nrow < n &&
        ncol < m &&
        distance[nrow][ncol] === -1
      ) {
        queue.push([nrow, ncol, step + 1]);
        distance[nrow][ncol] = step + 1;
      }
    }
  }

  return distance;
}

const adjMatrix = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];

console.log(updateMatrix(adjMatrix));
