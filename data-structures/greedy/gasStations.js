/**
 * https://leetcode.com/problems/gas-station/
 *
 * TC -> O(N)
 * SC -> O(1)
 */

function findGasStation(gas, cost) {
  const n = gas.length;
  let totalTank = 0;
  let currentTank = 0;
  let startingStation = 0;

  for (let i = 0; i < n; i++) {
    const diff = gas[i] - cost[i];
    totalTank += diff;
    currentTank += diff;
    if (currentTank < 0) {
      currentTank = 0;
      startingStation = i + 1;
    }
  }
  return totalTank < 0 ? -1 : startingStation;
}

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];
console.log(findGasStation(gas, cost));
