/**
 * https://stackfull.dev/heaps-in-javascript
 *
 */

function heappush(heap, newKey) {
  heap.push(newKey);
  let currIndex = heap.length - 1;

  while (currIndex > 0) {
    const parentIndex = Math.floor((currIndex - 1) / 2);
    // for max heap this condition will be opposite
    if (heap[currIndex] < heap[parentIndex]) {
      [heap[parentIndex], heap[currIndex]] = [
        heap[currIndex],
        heap[parentIndex],
      ];
      currIndex = parentIndex;
    } else {
      break;
    }
  }
}

function heappop(heap) {
  let last = heap.length - 1;
  let root = 0;
  [heap[root], heap[last]] = [heap[last], heap[root]];
  const removedKey = heap.pop();

  const length = heap.length;
  let currIndex = root;

  while (2 * currIndex + 1 < length) {
    let leftIndex = 2 * currIndex + 1;
    let rightIndex = 2 * currIndex + 2;
    // for max heap this condition will be opposite ->heap[rightIndex] > heap[leftIndex]
    const minChildIndex =
      rightIndex < length && heap[rightIndex] < heap[leftIndex]
        ? rightIndex
        : leftIndex;
    // for max heap this condition will be opposite -> heap[minChildIndex] > heap[currIndex]
    if (heap[minChildIndex] < heap[currIndex]) {
      [heap[minChildIndex], heap[currIndex]] = [
        heap[currIndex],
        heap[minChildIndex],
      ];
      currIndex = minChildIndex;
    }
  }
  return removedKey;
}

function heapify(input) {
  const heap = [];
  for (let i = 0; i < input.length; i++) {
    heappush(heap, input[i]);
  }

  return heap;
}

const input = [3, 5, 4, 10, 2, 1];
const heap = heapify(input);
console.log(heap);
heappop(heap);
console.log(heap);
