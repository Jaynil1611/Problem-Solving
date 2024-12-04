/**
 * https://takeuforward.org/data-structure/search-element-in-a-rotated-sorted-array/
 * https://takeuforward.org/arrays/search-element-in-rotated-sorted-array-ii/
 * TC -> O(logN)
 * SC -> O(1)
 *
 * Identify first if the left half is sorted or right half is sorted
 */

function searchInRotatedSortedArray(array, target) {
  const n = array.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
      return mid;
    }

    // for duplicate elements in array, trim down the conditions until you find sorted half
    if (array[low] === array[mid] && array[mid] === array[high]) {
      low++;
      high--;
      continue;
    }

    if (array[low] <= array[mid]) {
      if (array[low] <= target && target <= array[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (array[mid] <= target && target <= array[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

const input = [7, 8, 9, 1, 2, 3, 4, 5, 6];
console.log(searchInRotatedSortedArray(input, 1));

const duplicateInput = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6];
console.log(searchInRotatedSortedArray(duplicateInput, 1));
