/**
 * https://takeuforward.org/data-structure/3-sum-find-triplets-that-add-up-to-a-zero/
 * TC -> O(n^2 + NlogN)
 * SC -> O(result) -> result is number of triplets
 */

function threeSum(array) {
  const n = array.length;
  const result = [];

  // sort the array to get triplets in sorted order & avoid duplicates easily
  array.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    // avoid duplicate triplets
    if (i > 0 && array[i] === array[i - 1]) continue;
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      const sum = array[i] + array[j] + array[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        result.push([array[i], array[j], array[k]]);
        j++;
        k--;
        // avoid duplicate triplets
        while (j < k && array[j] === array[j - 1]) {
          j++;
        }
        // avoid duplicate triplets
        while (j < k && array[k] === array[k + 1]) {
          k--;
        }
      }
    }
  }
  return result;
}

const input = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(input));
