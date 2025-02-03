/**
 * https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i
 *
 * TC- > O(4 x M x N)
 * SC -> O(M x N)
 */

function minimumTimeToReach(moveTime) {
  const m = moveTime.length;
  const n = moveTime[0].length;
  const time = Array.from({ length: m }, () =>
    new Array(n).fill(Number.POSITIVE_INFINITY)
  );

  const queue = [];
  queue.push([0, 0, 0]);
  const delRow = [0, 1, 0, -1];
  const delCol = [-1, 0, 1, 0];

  while (queue.length) {
    const [row, col, t] = queue.shift();

    if (t >= time[row][col]) continue;

    time[row][col] = t;

    for (let i = 0; i < 4; i++) {
      const newRow = row + delRow[i];
      const newCol = col + delCol[i];

      if (newRow >= m || newCol >= n || newRow < 0 || newCol < 0) continue;

      const newTime = Math.max(moveTime[newRow][newCol], t) + 1;

      if (newTime >= time[newRow][newCol]) continue;

      queue.push([newRow, newCol, newTime]);
    }
  }

  return time[m - 1][n - 1];
}

const moveTime = [
  [0, 4],
  [4, 4],
];

console.log(minimumTimeToReach(moveTime));
