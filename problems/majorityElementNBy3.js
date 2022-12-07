/* Discussion Link: https://github.com/Jaynil1611/Problem-Solving/discussions/11 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const numLength = nums.length;
  let firstElement = 0;
  let secondElement = 0;
  let firstElementCount = 0;
  let secondElementCount = 0;
  for (let i = 0; i < numLength; i++) {
    if (firstElement === nums[i]) {
      firstElementCount++;
    } else if (secondElement === nums[i]) {
      secondElementCount++;
    } else if (firstElementCount === 0) {
      firstElement = nums[i];
      firstElementCount = 1;
    } else if (secondElementCount === 0) {
      secondElement = nums[i];
      secondElementCount = 1;
    } else {
      firstElementCount--;
      secondElementCount--;
    }
  }
  const result = [];
  firstElementCount = 0;
  secondElementCount = 0;
  for (let i = 0; i < numLength; i++) {
    if (nums[i] === firstElement) {
      firstElementCount++;
    } else if (nums[i] === secondElement) {
      secondElementCount++;
    }
  }
  const minFrequency = Math.floor(numLength / 3);
  if (firstElementCount > minFrequency) {
    result.push(firstElement);
  }
  if (secondElementCount > minFrequency) {
    result.push(secondElement);
  }
  return result;
};
