/**
 * https://takeuforward.org/data-structure/palindrome-partitioning/
 *
 * TC -> O(2^N x K)
 * SC -> O(K x X) 
 * where K is average length of partitions & x is number of partitions
 */

function isPalindrome(string, start, end) {
  while (start <= end) {
    if (string[start] === string[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

function getPartitions(index, string, path, res, n) {
  if (index === n) {
    res.push(path.slice());
    return;
  }

  for (let i = index; i < n; i++) {
    const current = string.substring(index, i + 1);
    if (isPalindrome(current, index, i)) {
      path.push(current);
      getPartitions(i + 1, string, path, res, n);
      path.pop();
    }
  }
}

function palindromePartitioning(inputString) {
  const n = inputString.length;
  const path = [];
  const res = [];
  getPartitions(0, inputString, path, res, n);
  return res;
}

const input = "aabb";
console.log(palindromePartitioning(input));
