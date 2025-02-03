/**
 * https://leetcode.com/problems/bus-routes/
 *
 * TC -> O(M x K x M) // M is size of routes, k is size of largest route[i]
 * SC -> O(M x K)
 */

function busRoutes(routes, source, target) {
  if (source === target) return 0;

  const adjList = new Map();
  const visited = new Array(routes.length).fill(0);
  const queue = [];
  let busCount = 1;

  for (let i = 0; i < routes.length; i++) {
    for (let stop of routes[i]) {
      if (adjList.has(stop)) {
        adjList.get(stop).push(i);
      } else {
        adjList.set(stop, [i]);
      }
    }
  }

  if (!adjList.has(source)) return -1;

  for (let route of adjList.get(source)) {
    visited[route] = 1;
    queue.push(route);
  }

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const route = queue.shift();
      for (let stop of routes[route]) {
        if (stop === target) {
          return busCount;
        }

        for (let neighbourRoute of adjList.get(stop)) {
          if (!visited[neighbourRoute]) {
            visited[neighbourRoute] = 1;
            queue.push(neighbourRoute);
          }
        }
      }
    }
    busCount++;
  }
  return -1;
}

const routes = [
  [1, 2, 7],
  [3, 5, 7],
  [3, 6, 8],
];
const source = 2;
const target = 8;
console.log(busRoutes(routes, source, target));
