/**
 * https://leetcode.com/problems/range-sum-query-immutable
 * TC -> O(N)
 * SC -> O(N)
 */

function NumArray(nums) {
  this.array = new Array(nums.length);
  this.array[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    this.array[i] = this.array[i - 1] + nums[i];
  }
  return this;
}

NumArray.prototype.sumRange = function (left, right) {
  if (left === 0) {
    return this.array[right];
  }
  return this.array[right] - this.array[left - 1];
};

const nums = [-2, 0, 3, -5, 2, -1];
const queries = [
  [0, 2],
  [2, 5],
  [0, 5],
];
const obj = new NumArray(nums);
for (let i = 0; i < 3; i++) {
  console.log(obj.sumRange(queries[i][0], queries[i][1]));
}
