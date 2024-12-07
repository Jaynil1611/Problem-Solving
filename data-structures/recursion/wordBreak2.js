/**
 * https://leetcode.com/problems/word-break-ii
 * TC -> O(n x 2 ^ n)
 * SC -> O(2 ^ n)
 */

function wordBreak2(string, wordDict) {
  const results = [];
  const wordSet = new Set(wordDict);

  function checkSubstring(
    string,
    wordSet,
    currentSubstring,
    results,
    startIndex
  ) {
    if (startIndex === string.length) {
      results.push(currentSubstring.join(" "));
    }
    for (let endIndex = startIndex + 1; endIndex <= string.length; endIndex++) {
      const word = string.slice(startIndex, endIndex);
      if (wordSet.has(word)) {
        currentSubstring.push(word);
        checkSubstring(string, wordSet, currentSubstring, results, endIndex);
        currentSubstring.pop();
      }
    }
  }
  checkSubstring(string, wordSet, [], results, 0);
  return results;
}

const input = "catsanddog";
const wordDict = ["cat", "cats", "and", "sand", "dog"];
console.log(wordBreak2(input, wordDict));
