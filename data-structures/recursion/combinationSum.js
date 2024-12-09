/**
 * https://takeuforward.org/data-structure/combination-sum-1/
 * TC -> O(2^t x K)
 * SC -> O(K x X)  (assume x is number of combinations in given input)
 */

function findCombinationSum(index, array, target, ds, result, n) {
  if (index === n) {
    if (target === 0) {
      result.push(ds.slice());
    }
    return;
  }

  if (array[index] <= target) {
    ds.push(array[index]);
    findCombinationSum(index, array, target - array[index], ds, result, n);
    ds.pop();
  }
  findCombinationSum(index + 1, array, target, ds, result, n);
}

function combinationSumOne(array, target) {
  const n = array.length;
  const result = [];
  findCombinationSum(0, array, target, [], result, n);
  return result;
}

const input = [2, 3, 6, 7];
const target = 7;
console.log(combinationSumOne(input, target));
