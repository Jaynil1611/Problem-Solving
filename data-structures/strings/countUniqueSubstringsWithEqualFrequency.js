/**
 * You are given a string s, and you have to count the total number of unique substring,
 * where the substring have the same number of frequency of each unique character in that substring.
 * Also the given string can have only digits from '0' to '9'.

TC -> O(N x N)
SC -> O(N x N)
 */

function countUniqueSubstringsWithEqualFrequency(s) {
  const n = s.length;
  const signature = new Set();

  for (let i = 0; i < n; i++) {
    const freq = new Array(10).fill(0);

    for (let j = i; j < n; j++) {
      freq[Number(s[j])]++;

      const nonZero = freq.filter((f) => f > 0);

      if (nonZero.every((f) => f === nonZero[0])) {
        const signaturePattern = freq.join(",");
        signature.add(`${signaturePattern} + @${j - i + 1}`);
      }
    }
  }
  return signature.size;
}

const input1 = "2222";
console.log(countUniqueSubstringsWithEqualFrequency(input1));
