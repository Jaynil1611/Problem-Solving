/**
 * https://takeuforward.org/data-structure/aggressive-cows-detailed-solution/
 *
 * TC -> O(NlogN) + O(Nxlog(max-min))
 * SC -> O(1)
 */

function areCowsPlaced(stalls, cows, dist) {
  let cowsCount = 1;
  let prevDist = stalls[0];
  for (let i = 1; i < stalls.length; i++) {
    if (stalls[i] - prevDist >= dist) {
      prevDist = stalls[i];
      cowsCount++;
    }
    if (cowsCount >= cows) return true;
  }
  return false;
}

function aggressiveCows(stalls, cows) {
  const n = stalls.length;
  let result = 0;
  stalls.sort((a, b) => a - b);
  // here low can be optimised to minimum consecutive difference between cows
  let low = 1;
  let high = stalls[n - 1] - stalls[0];
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (areCowsPlaced(stalls, cows, mid)) {
      low = mid + 1;
      result = mid;
    } else {
      high = mid - 1;
    }
  }
  return result;
}

const k = 2;
const stalls = [4, 2, 1, 3, 6];
console.log(aggressiveCows(stalls, k));
