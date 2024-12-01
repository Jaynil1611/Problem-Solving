/**
 * https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/
 * TC -> O(N)
 * SC -> O(1)
 */

function maximumSubarraySum(array) {
  const n = array.length;
  let currSum = 0;
  let pointer = -1;
  let maxSum = Number.NEGATIVE_INFINITY;
  let start = -1;
  let end = -1;

  for (let i = 0; i < n; i++) {
    if (currSum === 0) {
      pointer = i;
    }
    currSum += array[i];
    if (currSum < 0) {
      currSum = 0;
    } else if (currSum > maxSum) {
      maxSum = currSum;
      start = pointer;
      end = i;
    }
  }
  console.log(array.slice(start, end + 1));
  return maxSum;
}

const input = [-1, -1, -1, 0, -1];
console.log(maximumSubarraySum(input));
