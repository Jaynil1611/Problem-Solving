/**
 * https://takeuforward.org/data-structure/count-inversions-in-an-array/
 *
 * TC -> O(NlogN)
 * SC -> O(N)
 */

function merge(arr, low, mid, high) {
  const temp = [];
  let left = low;
  let right = mid + 1;
  let count = 0;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      count += mid - left + 1;
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return count;
}

function mergeSort(arr, low, high) {
  let count = 0;
  if (low === high) return count;

  const mid = Math.floor((low + high) / 2);

  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += merge(arr, low, mid, high);
  return count;
}

const arr = [5, 3, 2, 4, 1];
console.log(mergeSort(arr, 0, arr.length - 1));
