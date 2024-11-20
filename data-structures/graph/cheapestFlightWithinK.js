/**
 * https://takeuforward.org/data-structure/g-38-cheapest-flights-within-k-stops/
 * SC -> O(E) + O(V)
 * TC -> O(E)
 */

function Edge(src, dest, weight) {
  this.src = src;
  this.dest = dest;
  this.weight = weight;
}

function convertToAdjacencylist(flights, N) {
  const adjList = new Map();

  for (let i = 0; i < N; i++) {
    adjList.set(i, []);
  }

  for (let i = 0; i < flights.length; i++) {
    const [source, destination, weight] = flights[i];
    adjList.get(source).push([destination, weight]);
  }
  return adjList;
}

function dijkstraShortestPathWithinKStops(flights, source, destination, N, K) {
  const adjList = convertToAdjacencylist(flights, N);
  const queue = [];
  const distance = new Array(adjList.size).fill(Number.POSITIVE_INFINITY);

  queue.push([0, source, 0]);
  distance[source] = 0;

  while (queue.length) {
    const node = queue.shift();
    const [currDist, currNode, steps] = node;
    if (steps > K) {
      continue;
    }

    for (let neighbourPair of adjList.get(currNode)) {
      const [neighbour, weight] = neighbourPair;
      if (currDist + weight < distance[neighbour] && steps <= K) {
        distance[neighbour] = currDist + weight;
        queue.push([distance[neighbour], neighbour, steps + 1]);
      }
    }
  }

  return distance[destination] === Number.POSITIVE_INFINITY
    ? -1
    : distance[destination];
}

const flights = [
  [0, 1, 100],
  [1, 2, 100],
  [2, 0, 100],
  [1, 3, 600],
  [2, 3, 200],
];
const N = 4;
const source = 0;
const destination = 3;
const K = 1;
console.log(
  dijkstraShortestPathWithinKStops(flights, source, destination, N, K)
);
