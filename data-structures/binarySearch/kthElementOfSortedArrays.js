/**
 * https://takeuforward.org/data-structure/k-th-element-of-two-sorted-arrays/
 *
 * TC -> O(log(min(n1, n2)))
 * SC -> O(1)
 */

function kthElementOfTwoSortedArrays(a, b, k) {
  const n1 = a.length;
  const n2 = b.length;

  if (n1 > n2) return medianOfTwoSortedArrays(b, a, k);

  const minVal = Number.NEGATIVE_INFINITY;
  const maxVal = Number.POSITIVE_INFINITY;
  let low = Math.max(0, k - n2);
  let high = Math.min(n1, k);
  let left = k;
  while (low <= high) {
    const mid1 = Math.floor((low + high) / 2);
    const mid2 = left - mid1;
    let l1 = minVal,
      l2 = minVal,
      r1 = maxVal,
      r2 = maxVal;

    if (mid1 < n1) r1 = a[mid1];
    if (mid2 < n2) r2 = b[mid2];
    if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
    if (mid2 - 1 >= 0) l2 = b[mid2 - 1];

    if (l1 <= r2 && l2 <= r1) {
      return Math.max(l1, l2);
    }

    if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }
  return 0;
}

const num1 = [7, 12, 14, 15];
const num2 = [1, 2, 3, 4, 9, 11];
const k = 5;
console.log(kthElementOfTwoSortedArrays(num1, num2, k));
