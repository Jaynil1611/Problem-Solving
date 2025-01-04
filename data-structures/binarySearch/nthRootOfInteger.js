/**
 * https://takeuforward.org/data-structure/nth-root-of-a-number-using-binary-search/
 *
 * TC -> O(log2M)
 * SC -> O(1)
 */

function findPower(mid, n, m) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= mid;
    if (ans > m) return 2;
  }
  if (ans === m) return 1;
  return 0;
}

function nthRootOfInteger(n, m) {
  let low = 1;
  let high = Math.floor(m / 2);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const result = findPower(mid, n, m);

    if (result === 1) {
      return mid;
    }
    if (result === 2) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

const n = 4;
const m = 69;
console.log(nthRootOfInteger(n, m));
