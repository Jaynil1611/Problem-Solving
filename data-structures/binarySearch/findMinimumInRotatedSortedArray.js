/**
 * https://takeuforward.org/data-structure/minimum-in-rotated-sorted-array/
 * TC -> O(logN)
 * SC -> O(1)
 */

function findMinimumInRotatedSortedArray(array) {
  const n = array.length;
  let low = 0;
  let high = n - 1;
  let result = Number.POSITIVE_INFINITY;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // if search space is already sorted, then return array[low] & break
    // as it will be the minimum
    if (array[low] <= array[high]) {
      result = Math.min(result, array[low]);
      break;
    }

    if (array[low] <= array[mid]) {
      result = Math.min(result, array[low]);
      low = mid + 1;
    } else {
      result = Math.min(result, array[mid]);
      high = mid - 1;
    }
  }
  return result;
}

const input = [4, 5, 6, 7, 0, 1, 2, 3];
console.log(findMinimumInRotatedSortedArray(input));
