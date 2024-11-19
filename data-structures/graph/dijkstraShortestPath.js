/**
 * https://takeuforward.org/data-structure/g-35-print-shortest-path-dijkstras-algorithm/
 * SC -> O(V) + O(V) + O(E)
 * TC -> O(ElogV) + O(V)
 */

function Edge(src, dest, weight) {
  this.src = src;
  this.dest = dest;
  this.weight = weight;
}

const Graph = function (edges, N) {
  const adj = new Map();

  for (let edge of edges) {
    const { src, dest, weight } = edge;
    if (adj.has(src)) {
      adj.get(src).push([dest, weight]);
    } else {
      adj.set(src, [[dest, weight]]);
    }
  }

  for (let i = 0; i < N; i++) {
    if (!adj.has(i)) {
      adj.set(i, []);
    }
  }

  this.getAdjList = () => adj;
};

function dijkstraShortestPath(adjList, source, dest, N) {
  const parent = new Array(N + 1).fill(0);
  const distance = new Array(N + 1).fill(Number.POSITIVE_INFINITY);
  const set = new Set();
  const result = [];

  parent[source] = source;
  distance[source] = 0;
  set.add([0, source]);

  while (set.size !== 0) {
    const currNode = set.values().next().value;
    set.delete(currNode);
    const [currDist, node] = currNode;

    for (let neighbourPair of adjList.get(node)) {
      const [neighbour, weight] = neighbourPair;

      if (currDist + weight < distance[neighbour]) {
        if (distance[neighbour] !== Number.POSITIVE_INFINITY) {
          set.delete([distance[neighbour], neighbour]);
        }

        distance[neighbour] = currDist + weight;
        parent[neighbour] = node;
        set.add([distance[neighbour], neighbour]);
      }
    }
  }

  let node = dest;
  result.push(node);
  while (parent[node] != node) {
    node = parent[node];
    result.push(node);
  }

  return result;
}

const edges = [
  new Edge(1, 2, 2),
  new Edge(1, 4, 1),
  new Edge(2, 1, 2),
  new Edge(2, 3, 4),
  new Edge(2, 5, 5),
  new Edge(3, 2, 4),
  new Edge(3, 4, 3),
  new Edge(3, 5, 1),
  new Edge(4, 1, 1),
  new Edge(4, 3, 3),
  new Edge(5, 2, 5),
  new Edge(5, 3, 1),
];

const graph = new Graph(edges, 5);
const list = graph.getAdjList();
console.log(dijkstraShortestPath(list, 1, 5, 5));
