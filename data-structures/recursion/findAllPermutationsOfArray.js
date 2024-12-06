/**
 * https://takeuforward.org/data-structure/print-all-permutations-of-a-string-array/
 */
function swap(i, j, nums) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function permuteArray(index, array, ans) {
  const n = array.length;

  if (index === n) {
    ans.push(array.slice());
    return;
  }

  for (let i = index; i < n; i++) {
    swap(i, index, array);
    permuteArray(index + 1, array, ans);
    swap(i, index, array);
  }
}

function findAllPermutationsOfArray(array) {
  const ans = [];
  permuteArray(0, array, ans);
  return ans;
}

const input = [1, 2, 3];
console.log(findAllPermutationsOfArray(input));
