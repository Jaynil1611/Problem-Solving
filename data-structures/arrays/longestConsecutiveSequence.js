/**
 * https://takeuforward.org/data-structure/longest-consecutive-sequence-in-an-array/
 * TC -> Average / Best Case: O(1) | Worst Case O(N) -> O(3N)
 * SC -> O(N)
 */

function longestConsecutiveSequence(array) {
  const n = array.length;
  const set = new Set();
  let longest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < n; i++) {
    set.add(array[i]);
  }

  for (let elem of set) {
    if (!set.has(elem - 1)) {
      let count = 1;
      let seq = elem + 1;
      while (set.has(seq)) {
        seq += 1;
        count += 1;
      }
      longest = Math.max(longest, count);
    }
  }
  return longest === Number.NEGATIVE_INFINITY ? 0 : longest;
}

const input = [102, 4, 100, 1, 101, 3, 2, 1, 1];

console.log(longestConsecutiveSequence(input));
