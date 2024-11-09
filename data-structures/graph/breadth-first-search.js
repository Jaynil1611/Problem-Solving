/**
 * https://takeuforward.org/graph/breadth-first-search-bfs-level-order-traversal/
 * SC -> O(N) + O(N)
 * TC -> O(N + 2E)
 */

function Edge(src, dest) {
  this.src = src;
  this.dest = dest;
}

const Graph = function (edges) {
  const adj = new Map();

  for (let edge of edges) {
    const { src, dest } = edge;
    if (adj.has(src)) {
      adj.get(src).push(dest);
    } else {
      adj.set(src, [dest]);
    }
  }

  this.getAdjList = () => adj;
};

function breadthFirstSearch(adj, startingNode) {
  const size = adj.size;
  const visited = new Array(size + 1).fill(0);
  const traversalQueue = [];
  let result = "";

  visited[startingNode] = 1;
  traversalQueue.push(startingNode);

  while (traversalQueue.length) {
    const src = traversalQueue.shift();
    for (let dest of adj.get(src)) {
      if (!visited[dest]) {
        visited[dest] = 1;
        traversalQueue.push(dest);
      }
    }
    result += `${src}${traversalQueue.length ? ` -> ` : ""}`;
  }
  console.log(result);
}

const edges = [
  new Edge(1, 2),
  new Edge(1, 6),
  new Edge(2, 1),
  new Edge(2, 3),
  new Edge(2, 4),
  new Edge(3, 2),
  new Edge(4, 2),
  new Edge(4, 5),
  new Edge(5, 4),
  new Edge(5, 8),
  new Edge(6, 1),
  new Edge(6, 7),
  new Edge(6, 9),
  new Edge(7, 6),
  new Edge(7, 8),
  new Edge(8, 7),
  new Edge(8, 5),
  new Edge(9, 6),
];

const graph = new Graph(edges);
const list = graph.getAdjList();
breadthFirstSearch(list, 9);
