/**
 * https://takeuforward.org/data-structure/g-36-shortest-distance-in-a-binary-maze/
 * SC -> O(N x M)
 * TC -> O(N x M)
 */

function dijkstraShortestPathInMatrix(adjMatrix, source, destination) {
  const queue = [];
  const n = adjMatrix.length;
  const m = adjMatrix[0].length;
  const distance = Array.from({ length: n }, () =>
    new Array(m).fill(Number.POSITIVE_INFINITY)
  );

  const delRow = [1, 0, -1, 0];
  const delCol = [0, -1, 0, 1];

  const [sourceRow, sourceCol] = source;
  const [destRow, destCol] = destination;
  queue.push([0, sourceRow, sourceCol]);
  distance[sourceRow][sourceCol] = 0;

  while (queue.length) {
    const [dist, row, col] = queue.shift();

    if (row === destRow && col === destCol) {
      return dist;
    }

    for (let i = 0; i < 4; i++) {
      const nrow = row + delRow[i];
      const ncol = col + delCol[i];
      const newDist = dist + 1;

      if (
        nrow >= 0 &&
        ncol >= 0 &&
        nrow < n &&
        ncol < m &&
        adjMatrix[nrow][ncol] === 1 &&
        newDist < distance[nrow][ncol]
      ) {
        distance[nrow][ncol] = newDist;
        queue.push([newDist, nrow, ncol]);
      }
    }
  }

  return -1;
}

const adjMatrix = [
  [1, 1, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
  [1, 0, 0, 1],
];
const source = [0, 1];
const destination = [2, 2];

const adjMatrix2 = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
];
const source2 = [0, 0];
const destination2 = [3, 4];

console.log(dijkstraShortestPathInMatrix(adjMatrix, source, destination));
