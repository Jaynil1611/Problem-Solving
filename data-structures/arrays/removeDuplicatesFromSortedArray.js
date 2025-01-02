/**
 * https://takeuforward.org/data-structure/remove-duplicates-in-place-from-sorted-array/
 *
 * TC -> O(N)
 * SC -> O(1)
 */

function removeDuplicates(nums) {
  if (nums.length === 1) return 1;

  const n = nums.length;
  let left = 0;
  let right = 1;

  while (right < n) {
    if (nums[left] !== nums[right]) {
      nums[left + 1] = nums[right];
      left++;
    }
    right++;
  }
  return left + 1;
}

const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(input))