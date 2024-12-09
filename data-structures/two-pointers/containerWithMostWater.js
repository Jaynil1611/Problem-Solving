/**
 * https://leetcode.com/problems/container-with-most-water
 * TC -> O(N)
 * SC -> O(1)
 */

function containerWithMostWater(height) {
  const n = height.length;
  let maxArea = 0;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const area = width * minHeight;
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(containerWithMostWater(height));
