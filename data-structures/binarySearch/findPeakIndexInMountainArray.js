/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array
 * TC -> O(logN)
 * SC -> O(1)
 */

function findPeakIndexInMountainArray(array) {
  const n = array.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (array[mid - 1] <= array[mid] && array[mid + 1] <= array[mid]) {
      return mid;
    } else if (array[mid - 1] > array[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}

const input = [3, 4, 5, 1];
console.log(findPeakIndexInMountainArray(input));
