/**
 * https://takeuforward.org/arrays/left-rotate-an-array-by-d-places/
 *
 */

function reverse(array, start, end) {
  while (start < end) {
    const temp = array[start];
    array[start] = array[end - 1];
    array[end - 1] = temp;
    start++;
    end--;
  }
}

function rotateArrayByKPlaces(array, k) {
  const n = array.length;

  reverse(array, 0, k);
  reverse(array, k, n);
  reverse(array, 0, n);
  return array;
}

const input = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotateArrayByKPlaces(input, k));
