/**
 * https://takeuforward.org/data-structure/course-schedule-i-and-ii-pre-requisite-tasks-topological-sort-g-24/
 * SC -> O(N) + O(N)
 * TC -> O(N + E)
 */

function courseSchedule(prerequisites, n) {
  const adjList = new Map();

  for (let [first, second] of prerequisites) {
    if (adjList.has(second)) {
      adjList.get(second).push(first);
    } else {
      adjList.set(second, [first]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!adjList.has(i)) {
      adjList.set(i, []);
    }
  }

  const queue = [];
  const indegree = new Array(n).fill(0);
  const result = [];

  for (let node of adjList.keys()) {
    for (let neighbour of adjList.get(node)) {
      indegree[neighbour]++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (let neighbour of adjList.get(node)) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) {
        queue.push(neighbour);
      }
    }
  }

  /**
   * For course schedule 2, we need to return the ordering
  if (result.length === n) {
    return result.join("");
  }
  return [];
*/

  if (result.length === n) {
    return true;
  }
  return false;
}

const prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

console.log(courseSchedule(prerequisites, 4));
