/**
 * https://takeuforward.org/data-structure/find-the-duplicate-in-an-array-of-n1-integers/
 * TC -> O(N)
 * SC -> O(1)
 */

function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);

  fast = nums[0];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}

const input = [2, 5, 9, 6, 9, 3, 8, 9, 7, 1];
console.log(findDuplicate(input));
