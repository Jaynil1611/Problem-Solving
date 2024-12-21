/**
 * https://takeuforward.org/data-structure/find-k-th-permutation-sequence/
 *
 * TC -> O(N x N)
 * SC -> O(N)
 */

function kthPermutationSequence(n, k) {
  let fact = 1;
  let ans = "";
  const numbers = [];

  for (let i = 1; i < n; i++) {
    numbers.push(i);
    fact *= i;
  }
  numbers.push(n);
  k = k - 1;
  while (true) {
    const elementIndex = Math.floor(k / fact);
    ans = ans + String(numbers[elementIndex]);
    numbers.splice(elementIndex, 1);
    if (numbers.length === 0) {
      break;
    }
    k = k % fact;
    fact = Math.floor(fact / numbers.length);
  }
  return ans;
}

const n = 4;
const k = 17;
console.log(kthPermutationSequence(n, k));
