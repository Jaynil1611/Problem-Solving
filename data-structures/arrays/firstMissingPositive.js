/**
 * https://leetcode.com/problems/first-missing-positive
 * TC -> O(N)
 * SC -> O(1)
 */

function firstMissingPositive(nums) {
  const length = nums.length;
  let contains1 = false;

  for (let i = 0; i < length; i++) {
    if (nums[i] === 1) {
      contains1 = true;
    }
    if (nums[i] === 0 || nums[i] > length || nums[i] < 0) {
      nums[i] = 1;
    }
  }

  if (!contains1) return 1;

  for (let i = 0; i < length; i++) {
    const value = Math.abs(nums[i]);
    if (value === length) {
      nums[0] = -Math.abs(nums[0]);
    } else {
      nums[value] = -Math.abs(nums[value]);
    }
  }

  for (let i = 1; i < length; i++) {
    if (nums[i] > 0) return i;
  }

  if (nums[0] > 0) return length;

  return length + 1;
};
