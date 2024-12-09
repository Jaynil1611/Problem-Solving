/**
 * https://takeuforward.org/data-structure/4-sum-find-quads-that-add-up-to-a-target-value/
 * TC -> O(n ^ 3 + NlogN)
 * SC -> O(result) -> result is number of quadruplets
 */

function fourSum(array, target) {
  const n = array.length;
  const result = [];

  array.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (i > 0 && array[i] === array[i - 1]) continue;

    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && array[j] === array[j - 1]) continue;

      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        const sum = array[i] + array[j] + array[k] + array[l];
        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else {
          result.push([array[i], array[j], array[k], array[l]]);
          k++;
          l--;
          while (k < l && array[k] === array[k - 1]) {
            k++;
          }
          while (k < l && array[l] === array[l + 1]) {
            l--;
          }
        }
      }
    }
  }
  return result;
}

const input = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1];
const target = 9;
console.log(fourSum(input, target));
