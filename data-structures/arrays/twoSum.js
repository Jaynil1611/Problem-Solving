/**
 * https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array/
 * TC -> O(N log N)
 * SC -> O(N) | O(1)
 */

function twoSumSpaceOptimised(array, target) {
  const n = array.length;
  let start = 0;
  let end = n - 1;

  array.sort((a, b) => a - b);

  while (start < end) {
    let sum = array[start] + array[end];
    if (sum === target) {
      return true;
    }
    if (sum > target) {
      end -= 1;
    } else {
      start += 1;
    }
  }
  return false;
}

function twoSum(array, target) {
  const n = array.length;
  const map = new Map();
  let result = false;
  let start = -1;
  let end = -1;

  for (let i = 0; i < n; i++) {
    let required = target - array[i];
    if (map.has(required)) {
      result = true;
      start = map.get(required);
      end = i;
    }
    map.set(array[i], i);
  }
  return result ? [start, end] : false;
}

const input = [2, 6, 5, 8, 11];
console.log(twoSum(input, 14));
