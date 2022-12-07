/* Discussion Link: https://github.com/Jaynil1611/Problem-Solving/discussions/10 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let result = 1;
  let power = n < 0 ? -1 * n : n;

  while (power > 0) {
    if (power % 2 === 0) {
      x = x * x;
      power /= 2;
    } else {
      result *= x;
      power -= 1;
    }
  }
  return n < 0 ? 1 / result : result;
};
