var maxSubArray = function (nums) {
  const arrLength = nums.length;
  if (arrLength === 1) return nums[0];

  let j = 0;
  let currSum = 0;
  let maxSum = Number.NEGATIVE_INFINITY;
  while (j < arrLength) {
    currSum = Math.max(nums[j], currSum + nums[j]);
    maxSum = Math.max(maxSum, currSum);
    j += 1;
  }
  return maxSum;
};
