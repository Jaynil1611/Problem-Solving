/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * TC -> O(N)
 * SC -> O(1)
 */

function minimumSizeSubarray(target, nums) {
  const n = nums.length;
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLength = Number.POSITIVE_INFINITY;

  while (right < n) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return minLength === Number.POSITIVE_INFINITY ? 0 : minLength;
}

const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
console.log(minimumSizeSubarray(target, nums));
