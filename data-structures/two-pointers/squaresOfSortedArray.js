/**
 * https://leetcode.com/problems/squares-of-a-sorted-array
 * TC -> O(N)
 * SC -> O(N)
 */

function sortedSquares(nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;

  if (n === 0) {
    return nums;
  }
  let result = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] ** 2;
      left++;
    } else {
      result[i] = nums[right] ** 2;
      right--;
    }
  }
  return result;
}

const input1 = [-4, -1, 0, 3, 10];
const input2 = [-5, -3, -2, -1];
console.log(sortedSquares(input1));
