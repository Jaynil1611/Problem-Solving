/**
 * https://leetcode.com/problems/swap-adjacent-in-lr-string
 *
 * TC -> O(N)
 * SC -> O(1)
 */

function swapAdjacent(start, result) {
  let i = 0;
  let j = 0;

  while (i < start.length || j < result.length) {
    if (start[i] === "X") {
      i++;
      continue;
    }
    if (result[j] === "X") {
      j++;
      continue;
    }

    if (start[i] !== result[j]) {
      return false;
    }
    if (start[i] === "R" && i > j) {
      return false;
    }
    if (start[i] === "L" && j > i) {
      return false;
    }
    i++;
    j++;
  }
  return true;
}

const start = "RXXLRXRXL";
const end = "XRLXXRRLX";
console.log(swapAdjacent(start, end));
