/**
 * https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays
 *
 * TC -> O(2N)
 * SC -> O(1)
 */

function maxSubarrays(nums) {
  const n = nums.length;
  let minScore = nums[0];

  for (let i = 1; i < n; i++) {
    minScore = minScore & nums[i];
  }

  if (minScore === 0) {
    let subArrayCount = 0;
    let start = 0;
    let score = null;
    while (start < n) {
      score = score === null ? nums[start] : score & nums[start];
      if (score === 0) {
        subArrayCount++;
        score = null;
      }
      start++;
    }
    return subArrayCount;
  }
  return 1;
}

// [0, 0, 0], [0,8,0,0,0,23], [5,7,1,3]
const input = [1, 0, 2, 0, 1, 2];
console.log(maxSubarrays(input));
