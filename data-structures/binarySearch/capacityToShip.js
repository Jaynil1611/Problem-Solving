/**
 * https://takeuforward.org/arrays/capacity-to-ship-packages-within-d-days/
 * 
 * TC -> O(N) x O(log(sum - max + 1))
 * SC -> O(1)
 */

function findDays(weights, capacity) {
  const n = weights.length;
  let days = 1;
  let load = 0;
  for (let i = 0; i < n; i++) {
    if (load + weights[i] > capacity) {
      days++;
      load = weights[i];
    } else {
      load += weights[i];
    }
  }
  return days;
}

function capacityToShipWithinGivenDays(weights, d) {
  let low = Math.max(...weights);
  let high = weights.reduce((a, b) => a + b, 0);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const days = findDays(weights, mid);
    if (days <= d) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

const weights = [5, 4, 5, 2, 3, 4, 5, 6];
const d = 5;
console.log(capacityToShipWithinGivenDays(weights, d));
