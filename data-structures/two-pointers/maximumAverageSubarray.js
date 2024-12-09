/**
 * https://leetcode.com/problems/maximum-average-subarray-i
 * TC -> o(N)
 * SC -> O(1)
 */

function maximumAverageSubarray(nums, k) {
  const n = nums.length;
  let left = 0;
  let right = k;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxAverage = sum / k;

  while (right < n) {
    sum = sum - nums[left] + nums[right];
    maxAverage = Math.max(maxAverage, sum / k);
    left++;
    right++;
  }
  return maxAverage;
}

const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
console.log(maximumAverageSubarray(nums, k));
