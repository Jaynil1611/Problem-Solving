/**
 * https://leetcode.com/discuss/interview-question/5267395/Uber-SSE-frontend-ds-algo-interview-question
 *
 * TC -> O(N + M)
 * SC -> O(M) -> M is pattern length
 */

function verifyPatternOrder(pattern, inputString) {
  const patternMap = {};

  for (let i = 0; i < pattern.length; i++) {
    patternMap[pattern[i]] = i;
  }

  let maxIndexSoFar = -1;
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (char in patternMap) {
      const charIndex = patternMap[char];
      if (charIndex < maxIndexSoFar) {
        return false;
      }
      maxIndexSoFar = Math.max(maxIndexSoFar, charIndex);
    }
  }
  return true;
}

const pattern = "abcd";
const inputString = "aaabbbcccddd";
console.log(verifyPatternOrder(pattern, inputString));
