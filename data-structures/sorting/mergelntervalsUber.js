/**
 * Given two time series data lists,
  First List
  [(1, 3), (3, 1), (5,3), (6, 4), (10, 1)]
  Explanation:
  What this means is that at timestamp 1 the value is 3, and then at timestamp 3 the value is 1 and so on.
  Note: Missing/Undefined value on any timestamp is extrapolated backwards from the next timestamp. For example, value at timestamp 2 based on the example above would be 1.

  Second List
  [(2, 3), (6, 3), (9, 2)]

  Write a function to aggregate these two time series data into one
  Answer
  [(1, 6), (2, 4), (3, 4), (5,6), (6, 7), (9, 3), (10,1)]

  TC -> O(N + M)
  SC -> O(max(N, M))
 */

function aggregateTimeSeries(series1, series2) {
  const aggregated = [];
  let i = 0,
    j = 0;

  // Traverse both lists using two pointers
  while (i < series1.length || j < series2.length) {
    let timestamp1 = i < series1.length ? series1[i][0] : Infinity;
    let timestamp2 = j < series2.length ? series2[j][0] : Infinity;

    if (timestamp1 < timestamp2) {
      const value =
        j < series2.length ? series1[i][1] + series2[j][1] : series1[i][1];
      aggregated.push([timestamp1, value]);
      i++;
    } else if (timestamp2 < timestamp1) {
      const value =
        i < series1.length ? series1[i][1] + series2[j][1] : series1[j][1];
      aggregated.push([timestamp2, value]);
      j++;
    } else {
      aggregated.push([timestamp1, series1[i][1] + series2[j][1]]);
      i++;
      j++;
    }
  }

  return aggregated;
}

const series1 = [
  [1, 3],
  [3, 1],
  [5, 3],
  [6, 4],
  [10, 1],
];
const series2 = [
  [2, 3],
  [6, 3],
  [9, 2],
];
// Assuming both series are already sorted
console.log(aggregateTimeSeries(series1, series2));
