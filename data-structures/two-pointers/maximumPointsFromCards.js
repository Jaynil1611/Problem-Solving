/**
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 * TC -> O(k)
 * SC -> O(1)
 */

function maxPointsFromCards(array, k) {
  const n = array.length;
  let lsum = 0;
  let rsum = 0;
  let rightIndex = n - 1;

  for (let i = 0; i < k; i++) {
    lsum += array[i];
  }

  let maxSum = lsum;

  for (let i = k - 1; i >= 0; i--) {
    lsum -= array[i];
    rsum += array[rightIndex];
    rightIndex--;
    maxSum = Math.max(maxSum, lsum + rsum);
  }
  return maxSum;
}

const input = [6, 2, 3, 4, 7, 2, 1, 7, 1];
console.log(maxPointsFromCards(input, 4));
