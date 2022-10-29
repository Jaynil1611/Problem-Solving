/* Counting Sort Approach (Two-Pass) TC -> O(2N) */

/*
var sortColors = function (nums) {
  const numsLength = nums.length;
  if (numsLength === 1) {
    return nums;
  }

  let red = 0;
  let white = 0;
  let blue = 0;

  function countColors(arrValue) {
    switch (arrValue) {
      case 0:
        return red++;
      case 1:
        return white++;
      case 2:
        return blue++;
      default:
        return 0;
    }
  }

  for (let i = 0; i < numsLength; i++) {
    countColors(nums[i]);
  }

  let i = 0;
  while (i < numsLength && red > 0) {
    nums[i] = 0;
    red--;
    i++;
  }

  while (i < numsLength && white > 0) {
    nums[i] = 1;
    white--;
    i++;
  }

  while (i < numsLength && blue > 0) {
    nums[i] = 2;
    blue--;
    i++;
  }
};
*/

/* Dutch National Flag Algorithm (One-Pass) TC -> O(N) */

var sortColors = function (nums) {
  const numsLength = nums.length;
  if (numsLength === 1) {
    return nums;
  }

  let low = 0;
  let mid = 0;
  let high = numsLength - 1;

  function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  while (mid <= high) {
    switch (nums[mid]) {
      case 0:
        swap(nums, low, mid);
        low++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        swap(nums, mid, high);
        high--;
        break;
    }
  }
};
