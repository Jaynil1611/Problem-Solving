/**
 * https://leetcode.com/problems/zero-array-transformation-i/
 * TC -> O(N)
 * SC -> O(N)
 * 
 * Sum all the range queries into a new array. 
 * Create a prefix sum of this array & compare with original array.
 */

function isZeroArray(nums, queries) {
  const pre = new Array(nums.length + 1).fill(0);

  for (let query of queries) {
    const [start, end] = query;
    pre[start]++;
    if (end + 1 < pre.length) {
      pre[end + 1]--;
    }
  }

  for (let i = 1; i < pre.length; i++) {
    pre[i] += pre[i - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    if (pre[i] < nums[i]) {
      return false;
    }
  }
  return true;
}

const input = [1, 0, 1];
const queries = [[0, 2]];
console.log(isZeroArray(input, queries));
