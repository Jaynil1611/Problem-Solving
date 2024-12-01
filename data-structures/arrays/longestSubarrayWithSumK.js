/**
 * https://takeuforward.org/data-structure/longest-subarray-with-given-sum-k/
 */

function longestSubarrayWithSumK(array, k) {
  const n = array.length;
  let left = 0;
  let right = 0;
  let currSum = 0;
  let maxLength = 0;

  while (right < n) {
    currSum += array[right];
    if (currSum === k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
    while (currSum > k) {
      currSum -= array[left];
      left++;
    }
    right++;
  }
  return maxLength;
}

const input = [1, 2, 3, 1, 1, 1, 1, 3, 3];
const k = 6;
console.log(longestSubarrayWithSumK(input, k));
