/* Discussion Link: https://github.com/Jaynil1611/Problem-Solving/discussions/7 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const intervalsLength = intervals.length;
  if (intervalsLength === 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [];
  let basePair = intervals[0];
  let i = 1;
  while (i < intervalsLength) {
    if (intervals[i][0] <= basePair[1]) {
      basePair = [basePair[0], Math.max(basePair[1], intervals[i][1])];
    } else {
      mergedIntervals.push(basePair);
      basePair = intervals[i];
    }
    i++;
  }
  mergedIntervals.push(basePair);
  return mergedIntervals;
};
