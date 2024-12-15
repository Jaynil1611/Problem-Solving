/**
 * https://takeuforward.org/data-structure/job-sequencing-problem/
 * 
 * TC -> O(NlogN) + O(N x maxDeadline)
 * SC -> O(N) + O(N)
 */

function jobSequencing(id, deadline, profit) {
  const n = id.length;
  const jobs = [];
  const maxDeadline = Math.max(...deadline);
  const timeHash = new Array(maxDeadline + 1).fill(-1);
  let totalProfit = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    jobs[i] = { id: id[i], time: deadline[i], profit: profit[i] };
  }

  jobs.sort((a, b) => b.profit - a.profit);
  for (let i = 0; i < n; i++) {
    for (let j = jobs[i].time; j > 0; j--) {
      if (timeHash[j] === -1) {
        count++;
        totalProfit += jobs[i].profit;
        timeHash[j] = jobs[i].id;
        break;
      }
    }
  }
  return [count, totalProfit];
}

const id = [1, 2, 3, 4];
const deadline = [3, 1, 2, 2];
const profit = [50, 10, 20, 30];
console.log(jobSequencing(id, deadline, profit));
