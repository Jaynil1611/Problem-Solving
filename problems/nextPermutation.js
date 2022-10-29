var nextPermutation = function (nums) {
  const arrLength = nums.length;
  if (arrLength === 1) {
    return nums;
  }

  function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  function reverse(nums, start, end) {
    let i = start;
    let j = end;
    while (i < j) {
      swap(nums, i, j);
      i++;
      j--;
    }
  }

  let i = arrLength - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = arrLength - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }
  reverse(nums, i + 1, arrLength - 1);
};
