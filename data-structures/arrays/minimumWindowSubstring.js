/**
 * https://takeuforward.org/data-structure/minimum-window-substring
 * TC -> O(2N) + O(M)
 * SC -> O(256)
 */

function minimumWindowSubstring(string, target) {
  const n = string.length;
  const m = target.length;
  const hash = new Array(256).fill(0);
  let left = 0;
  let right = 0;
  let minLength = Number.POSITIVE_INFINITY;
  let startIndex = -1;
  let count = 0;

  for (let i = 0; i < m; i++) {
    hash[target[i].charCodeAt(0)]++;
  }

  while (right < n) {
    const charIndex = string[right].charCodeAt(0);
    if (hash[charIndex] > 0) {
      count += 1;
    }
    hash[charIndex]--;

    while (count === m) {
      if (right - left + 1 < minLength) {
        startIndex = left;
        minLength = right - left + 1;
      }
      const charIndex = string[left].charCodeAt(0);
      hash[charIndex]++;
      if (hash[charIndex] > 0) {
        count -= 1;
      }
      left++;
    }
    right++;
  }
  return startIndex === -1 ? "" : string.slice(startIndex, startIndex + minLength);
}

const string = "ddaaabbca";
const target = "abc";
console.log(minimumWindowSubstring(string, target));
