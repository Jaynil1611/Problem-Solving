/**
 * https://takeuforward.org/data-structure/sort-an-array-of-0s-1s-and-2s/
 * TC -> O(N)
 * SC -> O(1)
 */

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function sortColors(array) {
  const n = array.length;
  let low = 0;
  let mid = 0;
  let high = n - 1;

  while (mid <= high) {
    if (array[mid] === 0) {
      swap(array, low, mid);
      low++;
      mid++;
    } else if (array[mid] === 1) {
      mid++;
    } else {
      swap(array, mid, high);
      high -= 1;
    }
  }
  return array;
}

const input = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log(sortColors(input));
