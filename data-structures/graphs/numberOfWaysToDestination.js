/**
 * https://takeuforward.org/data-structure/g-40-number-of-ways-to-arrive-at-destination/
 * SC -> O(V) + O(V) + O(V)
 * TC -> O(E)
 */

function convertToAdjacencylist(edges, N) {
  const adjList = new Map();

  for (let i = 0; i < N; i++) {
    adjList.set(i, []);
  }

  for (let i = 0; i < edges.length; i++) {
    const [source, destination, weight] = edges[i];
    adjList.get(source).push([destination, weight]);
    adjList.get(destination).push([source, weight]);
  }
  return adjList;
}

function findNumberOfWaysToReachDestination(edges, N) {
  const adjList = convertToAdjacencylist(edges, N);
  const distance = new Array(N).fill(Number.POSITIVE_INFINITY);
  const ways = new Array(N).fill(0);
  const queue = [];
  // for large integer numbers
  const mod = 10 ** 9 + 7;

  distance[0] = 0;
  ways[0] = 1;
  queue.push([0, 0]);

  while (queue.length > 0) {
    const [dist, node] = queue.shift();

    for (let neighbourPair of adjList.get(node)) {
      const [neighbour, weight] = neighbourPair;
      const newDist = dist + weight;

      if (newDist < distance[neighbour]) {
        distance[neighbour] = newDist;
        queue.push([newDist, neighbour]);
        ways[neighbour] = ways[node];
      } else if (newDist === distance[neighbour]) {
        ways[neighbour] += ways[node];
      }
    }
  }
  return ways[N - 1] % mod;
}

const edges = [
  [0, 6, 7],
  [0, 1, 2],
  [1, 2, 3],
  [1, 3, 3],
  [6, 3, 3],
  [3, 5, 1],
  [6, 5, 1],
  [2, 5, 1],
  [0, 4, 5],
  [4, 6, 2],
];
const N = 7;
console.log(findNumberOfWaysToReachDestination(edges, N));
