/**
 * https://takeuforward.org/data-structure/find-the-repeating-and-missing-numbers/
 */

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

const input = [1, 2, 3, 4, 6, 6];
console.log(findRepeatAndMissingNumber(input));
