/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string
 * TC -> O(N)
 * SC -> O(N)
 *
 * Use stack as an approach for problems involving recursion type solution
 */

function removeAllAdjacentDuplicates(string) {
  const n = string.length;
  if (n === 1) return string;
  const stack = [];

  for (let i = 0; i < n; i++) {
    if (stack.length && stack[stack.length - 1] === string[i]) {
      stack.pop();
    } else {
      stack.push(string[i]);
    }
  }
  return stack.join("");
}

const input = "abbaca";
console.log(removeAllAdjacentDuplicates(input));
