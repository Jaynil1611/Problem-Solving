/**
 * https://www.geeksforgeeks.org/the-celebrity-problem/
 * TC -> O(2N)
 * SC -> O(1)
 */

function findCelebrity(matrix) {
  const n = matrix.length;
  let top = 0;
  let bottom = n - 1;

  while (top < bottom) {
    if (matrix[top][bottom] === 1) {
      top++;
    } else if (matrix[bottom][top] === 1) {
      bottom--;
    } else {
      top++;
      bottom--;
    }
  }
  if (top > bottom) {
    return -1;
  }

  for (let i = 0; i < n; i++) {
    if (i === top) continue;
    if (matrix[i][top] !== 1 || matrix[top][i] !== 0) {
      return -1;
    }
  }
  return top;
}

const input = [
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
console.log(findCelebrity(input));
