/**
 * https://takeuforward.org/arrays/product-of-array-except-itself/
 * TC -> O(N)
 * SC -> O(N)
 */

function productOfArrayExceptSelf(array) {
  const n = array.length;
  const prefixProduct = [];
  let suffixProduct = 1;
  const result = [];
  prefixProduct[0] = 1;

  for (let i = 1; i < n; i++) {
    prefixProduct[i] = array[i - 1] * prefixProduct[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    result[i] = suffixProduct * prefixProduct[i];
    suffixProduct *= array[i];
  }
  return result;
}

const input = [1, 4, 6, 2, 3];
console.log(productOfArrayExceptSelf(input));
