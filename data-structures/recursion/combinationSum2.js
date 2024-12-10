/**
 * https://takeuforward.org/data-structure/combination-sum-ii-find-all-unique-combinations/
 * TC -> O(2^N x K)
 * SC -> O(K x X)  (x is number of unique combinations)
 *
 * Input will contain duplicate elements,
 * so combination can be picked up from multiple indexes
 */

function findCombinationSum(index, target, array, ds, result, n) {
  if (target === 0) {
    result.push(ds.slice());
    return;
  }

  for (let i = index; i < n; i++) {
    if (i > index && array[i] === array[i - 1]) continue;
    if (array[i] > target) break;

    ds.push(array[i]);
    findCombinationSum(i + 1, target - array[i], array, ds, result, n);
    ds.pop();
  }
}

function combinationSumTwo(array, target) {
  const n = array.length;
  const result = [];
  array.sort((a, b) => a - b);
  findCombinationSum(0, target, array, [], result, n);
  return result;
}

const input = [10, 1, 2, 7, 6, 1, 5];
const target = 8;
console.log(combinationSumTwo(input, target));
