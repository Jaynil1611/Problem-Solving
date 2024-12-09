/**
 * https://takeuforward.org/data-structure/length-of-longest-substring-without-any-repeating-character/
 * TC -> O(N)
 * SC -> O(256)
 */

function longestSubstringWithoutRepeating(string) {
  const n = string.length;
  const map = new Array(256).fill(-1);

  let left = 0;
  let right = 0;
  let maxLength = 0;

  while (right < n) {
    const char = string[right].charCodeAt(0);
    const currIndex = map[char];
    if (currIndex != -1 && left <= currIndex) {
      left = currIndex + 1;
    }
    map[char] = right;
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
}

const input = "cadbzabcd";
console.log(longestSubstringWithoutRepeating(input));
