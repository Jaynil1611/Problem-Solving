// Discussion Link: https://github.com/Jaynil1611/Problem-Solving/discussions/9

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function repeatedNumber(A) {
  let arrLength = A.length;
  let sum = Math.floor((arrLength * (arrLength + 1)) / 2);
  let squareSum = Math.floor(
    (arrLength * (arrLength + 1) * (2 * arrLength + 1)) / 6
  );
  for (let i = 0; i < arrLength; i++) {
    sum -= A[i];
    squareSum -= A[i] ** 2;
  }
  const missingNumber = Math.floor(Math.floor(squareSum / sum + sum) / 2);
  const duplicateNumber = missingNumber - sum;
  return [duplicateNumber, missingNumber];
}
