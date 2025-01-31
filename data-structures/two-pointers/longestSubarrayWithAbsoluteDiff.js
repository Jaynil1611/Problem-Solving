/**
 * https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit
 * 
 * TC -> O(N)
 * SC -> O(N)
 */

function longestSubarrayWithAbsoluteDiff(nums, limit) {
  let increasingDeque = [];
  let decreasingDeque = [];
  let maxLength = 0;
  const length = nums.length;

  let left = 0;
  let right = 0;
  while (right < length) {
    if (
      increasingDeque.length &&
      nums[right] < increasingDeque[increasingDeque.length - 1]
    ) {
      increasingDeque.pop();
    }
    increasingDeque.push(nums[right]);

    if (
      decreasingDeque.length &&
      nums[right] > decreasingDeque[decreasingDeque.length - 1]
    ) {
      decreasingDeque.pop();
    }
    decreasingDeque.push(nums[right]);

    while (Math.abs(increasingDeque[0] - decreasingDeque[0]) > limit) {
      if (nums[left] === increasingDeque[0]) {
        increasingDeque.shift();
      }
      if (nums[left] === decreasingDeque[0]) {
        decreasingDeque.shift();
      }
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
}

console.log(longestSubarrayWithAbsoluteDiff([10, 1, 2, 4, 7, 2], 5));
