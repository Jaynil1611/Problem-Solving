/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * TC -> O(N)
 * SC -> O(26)
 */

function longestRepeatingCharacter(string, k) {
  const n = string.length;
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let maxFreq = 0;
  const map = new Array(26).fill(0);
  const ascii = "A".charCodeAt(0);

  while (right < n) {
    const char = string[right].charCodeAt(0) - ascii;
    map[char]++;
    maxFreq = Math.max(maxFreq, map[char]);

    if (right - left + 1 - maxFreq > k) {
      const char = string[left].charCodeAt(0) - ascii;
      map[char]--;
      left++;
    }

    if (right - left + 1 - maxFreq <= k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
  }
  return maxLength;
}

const input = "AAABBCCD";
const k = 2;
console.log(longestRepeatingCharacter(input, k));
