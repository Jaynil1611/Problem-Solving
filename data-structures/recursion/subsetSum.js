/**
 * https://takeuforward.org/data-structure/subset-sum-sum-of-all-subsets/
 * TC -> O(2^N + 2^Nlog(2^N))
 * SC -> O(2^N)
 */

function findSubsetSum(index, sum, array, result, n) {
  if (index >= n) {
    result.push(sum);
    return;
  }

  findSubsetSum(index + 1, sum + array[index], array, result, n);
  findSubsetSum(index + 1, sum, array, result, n);
}

function subsetSum(array) {
  const n = array.length;
  const result = [];

  findSubsetSum(0, 0, array, result, n);
  result.sort((a, b) => a - b);
  return result;
}

const input = [5, 1, 2];
console.log(subsetSum(input));
