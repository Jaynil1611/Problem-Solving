
const arrLength = parseInt(readLine());
const arr = readLine().replace(/\s+$/g, "").split(" ");

function merge(arr, temp, left, mid, right) {
  let inversionCount = 0;
  let i = left;
  let j = mid;
  let k = left;

  while (i <= mid - 1 && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
      inversionCount += mid - i;
    }
  }
  while (i <= mid - 1) {
    temp[k++] = arr[i++];
  }
  while (j <= right) {
    temp[k++] = arr[j++];
  }
  for (let r = left; r <= right; r++) {
    arr[r] = temp[r];
  }
  return inversionCount;
}

function mergeSort(arr, temp, left, right) {
  let inversionCount = 0;
  if (right > left) {
    const mid = Math.floor((left + right) / 2);
    inversionCount += mergeSort(arr, temp, left, mid);
    inversionCount += mergeSort(arr, temp, mid + 1, right);
    inversionCount += merge(arr, temp, left, mid + 1, right);
  }
  return inversionCount;
}
const temp = [];
console.log(mergeSort(arr, temp, 0, arrLength - 1));
