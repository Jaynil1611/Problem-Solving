/**
 * https://takeuforward.org/arrays/kth-missing-positive-number/
 * TC -> O(logN)
 * SC -> O(1)
 */

function kthMissingPositive(array, k) {
  const n = array.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const missing = array[mid] - (mid + 1);
    if (missing < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low + k;
}

const input = [2, 3, 4, 7, 11];
console.log(kthMissingPositive(input, 5));
