/**
 * https://takeuforward.org/data-structure/maximum-product-subarray-in-an-array/
 * TC -> O(N)
 * SC -> O(1)
 */

function maximumProductSubarray(array) {
  const n = array.length;
  let prefix = 1;
  let suffix = 1;
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < n; i++) {
    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;
    prefix = prefix * array[i];
    suffix = suffix * array[n - i - 1];
    max = Math.max(max, prefix, suffix);
  }
  return max;
}

const input = [1, 2, -3, 0, -4, -5];
console.log(maximumProductSubarray(input));
