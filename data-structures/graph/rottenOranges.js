/**
 * https://takeuforward.org/data-structure/rotten-oranges/
 * TC -> O(NxM)
 * SC -> O(NxM)
 */

function minimumTimeToRottenOranges(adjMatrix) {
  const n = adjMatrix.length;
  const m = adjMatrix[0].length;
  const visited = Array.from({ length: n }, () => new Array(m));
  const queue = [];
  const delRow = [-1, 0, 1, 0];
  const delCol = [0, 1, 0, -1];
  let time = 0;
  let freshCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (adjMatrix[i][j] === 2) {
        queue.push([i, j, 0]);
        visited[i][j] = 2;
      }
      // counting fresh oranges in case where fresh oranges are not reachable, we need to return -1
      if (adjMatrix[i][j] === 1) {
        freshCount++;
      }
    }
  }

  while (queue.length) {
    const [row, col, initialTime] = queue.shift();
    time = Math.max(time, initialTime);

    for (let i = 0; i < 4; i++) {
      const nrow = row + delRow[i];
      const ncol = col + delCol[i];
      if (
        nrow >= 0 &&
        ncol >= 0 &&
        nrow < n &&
        ncol < m &&
        visited[nrow][ncol] != 2 &&
        adjMatrix[nrow][ncol] === 1
      ) {
        visited[nrow][ncol] = 2;
        queue.push([nrow, ncol, initialTime + 1]);
        freshCount--;
      }
    }
  }

  if (freshCount > 0) {
    console.log(-1);
  } else {
    console.log(time);
  }
}

const adjMatrix = [
  [0, 1, 2],
  [0, 1, 1],
  [2, 1, 1],
];

minimumTimeToRottenOranges(adjMatrix);
