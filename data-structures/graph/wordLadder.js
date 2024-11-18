/**
 * https://takeuforward.org/graph/word-ladder-i-g-29/
 * SC -> O(N) + O(N)
 * TC -> O(N * wordLength * 26 * logN)
 */

const ascii = "a".charCodeAt(0);

function transformStringSequence(string, charIndex, char) {
  const stringArray = string.split("");
  stringArray[charIndex] = String.fromCharCode(char + ascii);
  return stringArray.join("");
}

function findShortestSequence(wordList, startWord, targetWord) {
  const queue = [];
  const set = new Set(wordList);
  const wordLength = startWord.length;

  queue.push([startWord, 1]);

  while (queue.length) {
    const [word, steps] = queue.shift();
    set.delete(word);

    if (word === targetWord) {
      return steps;
    }

    for (let i = 0; i < wordLength; i++) {
      for (let j = 0; j < 26; j++) {
        const transformedWord = transformStringSequence(word, i, j);

        if (set.has(transformedWord)) {
          queue.push([transformedWord, steps + 1]);
        }
      }
    }
  }
  return 0;
}

const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
const startWord = "hit";
const targetWord = "cog";

console.log(findShortestSequence(wordList, startWord, targetWord));
