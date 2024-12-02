/**
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * TC -> O(N)
 * SC -> O(1)
 */

function findAllDuplicates(array) {
  const n = array.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    const element = Math.abs(array[i]);
    const index = element - 1;
    if (array[index] < 0) {
      result.push(Math.abs(array[i]));
    }
    array[index] = array[index] * -1;
  }
  return result;
}

const input = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findAllDuplicates(input));
