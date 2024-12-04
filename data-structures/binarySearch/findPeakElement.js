/**
 * https://takeuforward.org/data-structure/peak-element-in-array/
 * TC -> O(logN)
 * SC -> O(1)
 */

function findPeakElement(arr) {
  const n = arr.length;

  if (n === 1) return 0;
  if (arr[0] > arr[1]) return 0;
  if (arr[n - 1] > arr[n - 2]) return n - 1;

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid - 1] <= arr[mid] && arr[mid + 1] <= arr[mid]) {
      return mid;
    } else if (arr[mid - 1] > arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];
console.log(findPeakElement(input));
