/* Discussion Link: https://github.com/Jaynil1611/Problem-Solving/discussions/11 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const numLength = nums.length;
  let result = 0;
  let elementCount = 0;
  for (let i = 0; i < numLength; i++) {
    if (elementCount === 0) {
      result = nums[i];
    }
    if (result === nums[i]) {
      elementCount++;
    } else {
      elementCount--;
    }
  }
  return result;
};
