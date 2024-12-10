/**
 * https://leetcode.com/problems/asteroid-collision
 * TC -> O(N)
 * SC -> O(N)
 */

function asteroidCollisions(asteroids) {
  const n = asteroids.length;
  const stack = [];

  for (let i = 0; i < n; i++) {
    const a = asteroids[i];

    if (a > 0) {
      stack.push(a);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(a)
      ) {
        stack.pop();
      }

      if (!stack.length || stack[stack.length - 1] < 0) {
        stack.push(a);
      }

      if (stack[stack.length - 1] === Math.abs(a)) {
        stack.pop();
      }
    }
  }
  return stack;
}

const input = [10, 2, -5];
console.log(asteroidCollisions(input));
