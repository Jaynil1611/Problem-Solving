/**
 * https://takeuforward.org/data-structure/find-the-repeating-and-missing-numbers/
 * TC -> O(N)
 * SC -> O(1)
 */

function findRepeatAndMissingNumberSummationApproach(A) {
  let arrLength = A.length;
  let sum = Math.floor((arrLength * (arrLength + 1)) / 2);
  let squareSum = Math.floor(
    (arrLength * (arrLength + 1) * (2 * arrLength + 1)) / 6,
  );
  for (let i = 0; i < arrLength; i++) {
    sum -= A[i];
    squareSum -= A[i] ** 2;
  }
  const missingNumber = Math.floor(Math.floor(squareSum / sum + sum) / 2);
  const duplicateNumber = missingNumber - sum;
  return [duplicateNumber, missingNumber];
}

function findRepeatAndMissingNumber(input) {
  const array = input.slice();
  const n = array.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    const element = Math.abs(array[i]);
    const index = element - 1;
    if (array[index] < 0) {
      result.push(element);
      break;
    }
    array[index] *= -1;
  }
  for (let i = 0; i < n; i++) {
    if (array[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
}

const input = [3, 1, 2, 5, 4, 6, 7, 5];
console.log(findRepeatAndMissingNumber(input));
console.log(findRepeatAndMissingNumberSummationApproach(input));
