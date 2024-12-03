/**
 * https://takeuforward.org/data-structure/next_permutation-find-next-lexicographically-greater-permutation/
 * TC -> O(N)
 * SC -> O(1)
 */

function reverse(arr, start, end) {
  let i = start;
  let j = end;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

function nextPermutation(array) {
  const n = array.length;
  let index = -1;

  for (let i = n - 2; i >= 0; i--) {
    if (array[i] < array[i + 1]) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    reverse(array, 0, n - 1);
    return array;
  }

  for (let i = n - 1; i >= 0; i--) {
    if (array[i] > array[index]) {
      [array[i], array[index]] = [array[index], array[i]];
      break;
    }
  }

  reverse(array, index + 1, n - 1);
  return array;
}

const input = [2, 1, 5, 4, 3, 0, 0];
console.log(nextPermutation(input));
