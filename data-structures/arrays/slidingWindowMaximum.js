/**
 * https://takeuforward.org/data-structure/sliding-window-maximum/
 */

function findSlidingWindowMaximum(array, k) {
  const dequeue = [];
  const n = array.length;
  const ans = [];

  for (let i = 0; i < n; i++) {
    if (dequeue.length && dequeue[0] <= i - k) {
      dequeue.shift();
    }

    while (dequeue.length && array[dequeue[dequeue.length - 1]] <= array[i]) {
      dequeue.pop();
    }
    dequeue.push(i);

    if (i >= k - 1) {
      ans.push(array[dequeue[0]]);
    }
  }
  return ans;
}

const arr = [4, 0, -1, 3, 5, 3, 6, 8];
const k = 3;
console.log(findSlidingWindowMaximum(arr, k));
