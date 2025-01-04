/**
 * https://algo.monster/liteproblems/246
 *
 * Explanation: A strobogrammatic number is one that appears the same when flipped 180 degrees.
 * Notably, '6' becomes '9', '9' becomes '6', '8' remains '8', '1' remains '1', and '0' remains '0'.
 * Numbers like '2', '3', '4', '5', and '7' do not form valid numbers when flipped, so they cannot be part of a strobogrammatic number.
 *
 * TC -> O(N / 2)
 * SC -> O(10) ~ O(1)
 */

function strobogrammaticNumber(number) {
  const hashMap = {
    0: 0,
    1: 1,
    2: -1,
    3: -1,
    4: -1,
    5: -1,
    6: 9,
    7: -1,
    8: 8,
    9: 6,
  };
  let left = 0;
  let right = number.length - 1;

  while (left < right) {
    const first = hashMap[number[left]];
    const second = Number(number[right]);

    if (first !== second) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

const input = "120021";
console.log(strobogrammaticNumber(input));
