/**
 * https://leetcode.com/problems/subarrays-with-k-different-integers
 * TC -> O(2N)
 * SC -> O(N)
 */

function getSubArrayCount(array, k) {
  const n = array.length;
  let left = 0;
  let right = 0;
  let count = 0;
  const map = new Map();

  while (right < n) {
    map.set(array[right], (map.get(array[right]) || 0) + 1);

    while (map.size > k) {
      const element = array[left];
      map.set(element, map.get(element) - 1);
      if (map.get(element) === 0) {
        map.delete(element);
      }
      left++;
    }
    count += right - left + 1;
    right++;
  }
  return count;
}

function subarrayWithKDistinctIntegers(array, k) {
  return getSubArrayCount(array, k) - getSubArrayCount(array, k - 1);
}

const input = [2, 1, 1, 1, 3, 4, 3, 2];
const k = 3;
console.log(subarrayWithKDistinctIntegers(input, k));
