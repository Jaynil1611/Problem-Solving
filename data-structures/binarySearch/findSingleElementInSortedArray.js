/**
 * https://takeuforward.org/data-structure/search-single-element-in-a-sorted-array/
 *
 * TC -> O(logN)
 * SC -> O(1)
 */

function findSingleElementInSortedArray(array) {
  const n = array.length;

  if (n === 1) return array[0];

  if (array[0] !== array[1]) return array[0];

  if (array[n - 1] !== array[n - 2]) return array[n - 1];

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (array[mid - 1] !== array[mid] && array[mid] !== array[mid + 1]) {
      return array[mid];
    }

    const i = mid;
    if (
      (i % 2 === 0 && array[i] === array[i + 1]) ||
      (i % 2 === 1 && array[i] === array[i - 1])
    ) {
      low = mid + 1
    } else {
      high = mid - 1;
    }
  }
}

const input = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
console.log(findSingleElementInSortedArray(input));
