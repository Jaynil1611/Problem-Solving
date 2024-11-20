/**
 * https://takeuforward.org/data-structure/g-37-path-with-minimum-effort/
 * SC -> O(N x M)
 * TC -> O(4 x N x M x log N x M)
 */

function pathWithMinimumEffort(heights) {
  const n = heights.length;
  const m = heights[0].length;
  const distance = Array.from({ length: n }, () =>
    new Array(m).fill(Number.POSITIVE_INFINITY)
  );
  const set = new Set();
  const delRow = [-1, 0, 1, 0];
  const delCol = [0, -1, 0, 1];

  distance[0][0] = 0;
  set.add([0, 0, 0]);

  while (set.size) {
    const cell = set.values().next().value;
    set.delete(cell);
    const [diff, row, col] = cell;

    if (row === n - 1 && col === m - 1) {
      return diff;
    }

    for (let i = 0; i < 4; i++) {
      const nrow = row + delRow[i];
      const ncol = col + delCol[i];

      if (nrow >= 0 && ncol >= 0 && nrow < n && ncol < m) {
        const effort = Math.max(
          Math.abs(heights[nrow][ncol] - heights[row][col]),
          diff
        );

        if (effort < distance[nrow][ncol]) {
          distance[nrow][ncol] = effort;
          set.add([distance[nrow][ncol], nrow, ncol]);
        }
      }
    }
  }
  return 0;
}

const heights = [
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5],
];
console.log(pathWithMinimumEffort(heights));
