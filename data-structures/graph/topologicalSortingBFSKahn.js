/**
 * https://takeuforward.org/data-structure/kahns-algorithm-topological-sort-algorithm-bfs-g-22/
 * SC -> O(V) + O(V)
 * TC -> O(V + E)
 */

function Edge(src, dest) {
  this.src = src;
  this.dest = dest;
}

const Graph = function (edges) {
  const adj = new Map();
  const size = edges.length;

  for (let edge of edges) {
    const { src, dest } = edge;
    if (adj.has(src)) {
      adj.get(src).push(dest);
    } else {
      adj.set(src, [dest]);
    }
  }

  for (let i = 0; i < size; i++) {
    if (!adj.has(i)) {
      adj.set(i, []);
    }
  }

  this.getAdjList = () => adj;
};

function topologicalSort(adjList) {
  const size = adjList.size;
  const indegree = new Array(size).fill(0);
  const queue = [];
  const result = [];

  for (let node of adjList.keys()) {
    for (let neighbour of adjList.get(node)) {
      indegree[neighbour]++;
    }
  }

  for (let i = 0; i < size; i++) {
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

  return result.join(" ");
}

const edges = [
  new Edge(2, 3),
  new Edge(3, 1),
  new Edge(4, 0),
  new Edge(4, 1),
  new Edge(5, 0),
  new Edge(5, 2),
];

const graph = new Graph(edges);
const list = graph.getAdjList();
console.log(topologicalSort(list));