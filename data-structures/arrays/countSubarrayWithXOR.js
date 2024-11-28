/**
 * https://takeuforward.org/data-structure/count-the-number-of-subarrays-with-given-xor-k/
 * TC -> O(N)
 * SC -> O(N)
 */

function countSubarrayWithGivenXOR(array, k) {
  const n = array.length;
  const map = new Map();
  let xor = 0;
  let count = 0;

  map.set(0, 1);
  for (let i = 0; i < n; i++) {
    xor = xor ^ array[i];
    const x = xor ^ k;
    if (map.has(x)) {
      count += map.get(x);
    }
    map.set(xor, (map.get(xor) || 0) + 1);
  }
  return count;
}

const arr = [4, 2, 2, 6, 4];
const k = 6;
console.log(countSubarrayWithGivenXOR(arr, k));
