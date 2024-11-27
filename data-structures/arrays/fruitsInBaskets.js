/**
 * https://www.geeksforgeeks.org/problems/fruit-into-baskets-1663137462/1
 * TC -> O(N)
 * SC -> O(3) (max type of fruits in map)
 */

function maxNumberOfFruits(array, k) {
  const n = array.length;
  let left = 0;
  let right = 0;
  let maxLength = 0;
  const map = new Map();

  while (right < n) {
    const fruit = array[right];
    map.set(fruit, map.get(fruit) || 0 + 1);

    // We can also right with if to avoid O(N) extra time complexity of this while loop
    // if(map.size > k) {
    while (map.size > k) {
      const fruit = array[left];
      map.set(fruit, map.get(fruit) - 1);
      if (map.get(fruit) === 0) {
        map.delete(fruit);
      }
      left++;
    }

    if (map.size <= k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
  }
  return maxLength;
}

const input = [3, 1, 2, 2, 2, 2];
console.log(maxNumberOfFruits(input, 2));
