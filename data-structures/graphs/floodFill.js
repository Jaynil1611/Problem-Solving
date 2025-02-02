/*
 * Link: https://takeuforward.org/graph/flood-fill-algorithm-graphs/
 * TC -> O(NxM)
 * SC -> O(NxM)
 */

function copyMatrix(adjMatrix) {
  const size = adjMatrix.length;
  const copyMatrix = Array.from({ length: size }, () => new Array(size));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      copyMatrix[i][j] = adjMatrix[i][j];
    }
  }

  return copyMatrix;
}

function depthFirstSearch(
  row,
  col,
  adjMatrix,
  finalMatrix,
  initialColor,
  newColor,
  delRow,
  delCol
) {
  const size = adjMatrix.length;
  finalMatrix[row][col] = newColor;

  for (let i = 0; i < 4; i++) {
    const nrow = row + delRow[i];
    const ncol = col + delCol[i];

    if (
      nrow >= 0 &&
      ncol >= 0 &&
      nrow < size &&
      ncol < size &&
      adjMatrix[nrow][ncol] === initialColor &&
      finalMatrix[nrow][ncol] != newColor
    ) {
      depthFirstSearch(
        nrow,
        ncol,
        adjMatrix,
        finalMatrix,
        initialColor,
        newColor,
        delRow,
        delCol
      );
    }
  }
}

function floodFill(adjMatrix, sr, sc, newColor) {
  const delRow = [-1, 0, 1, 0];
  const delCol = [0, 1, 0, -1];
  const initialColor = adjMatrix[sr][sc];
  const finalMatrix = copyMatrix(adjMatrix);

  depthFirstSearch(
    sr,
    sc,
    adjMatrix,
    finalMatrix,
    initialColor,
    newColor,
    delRow,
    delCol
  );

  console.log(finalMatrix);
}

const adjMatrix = [
  [1, 1, 1],
  [2, 2, 0],
  [2, 2, 2],
];

floodFill(adjMatrix, 2, 0, 3);
