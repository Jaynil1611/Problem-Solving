/**
 * https://leetcode.com/problems/decode-string/
 *
 * TC -> O(M x N) -> M is maximum number that appears in string
 * SC -> O(N)
 */

function decodeString(s) {
  const stack = [];
  for (let char of s) {
    if (char !== "]") {
      stack.push(char);
      continue;
    } else {
      let str = "";
      let cur = "";
      while (cur !== "[") {
        str = cur + str;
        cur = stack.pop();
      }
      let num = "";
      while (!Number.isNaN(Number(stack[stack.length - 1]))) {
        cur = stack.pop();
        num = cur + num;
      }
      stack.push(str.repeat(Number(num)));
    }
  }
  return stack.join("");
}

const input = "3[a2[c]]";
console.log(decodeString(input));
