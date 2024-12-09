/**
 * https://takeuforward.org/data-structure/trapping-rainwater/
 * TC -> O(N)
 * SC -> O(1)
 */

function trappingRainWater(array) {
  const n = array.length;
  let left = 0;
  let right = n - 1;
  let leftMax = 0;
  let rightMax = 0;
  let total = 0;

  while (left < right) {
    if (array[left] < array[right]) {
      if (leftMax > array[left]) {
        total += leftMax - array[left];
      } else {
        leftMax = array[left];
      }
      left++;
    } else {
      if (rightMax > array[right]) {
        total += rightMax - array[right];
      } else {
        rightMax = array[right];
      }
      right--;
    }
  }
  return total;
}

const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trappingRainWater(input));
