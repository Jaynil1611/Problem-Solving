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

function depthFirstSearch(adj, startingNode) {
  const size = adj.size;
  const visited = new Array(size + 1).fill(0);
  const result = [];

  function dfs(node, result) {
    visited[node] = 1;
    result.push(node);
    for (let neighbour of adj.get(node)) {
      if (!visited[neighbour]) {
        dfs(neighbour, result);
      }
    }
  }

  dfs(startingNode, result);

  console.log(result.join(" -> "));
}

const edges = [
  new Edge(1, 2),
  new Edge(1, 3),
  new Edge(2, 1),
  new Edge(2, 5),
  new Edge(2, 6),
  new Edge(3, 1),
  new Edge(3, 4),
  new Edge(3, 7),
  new Edge(4, 3),
  new Edge(4, 8),
  new Edge(5, 2),
  new Edge(6, 2),
  new Edge(7, 3),
  new Edge(7, 8),
  new Edge(8, 4),
  new Edge(8, 7),
];

const graph = new Graph(edges);
const list = graph.getAdjList();
depthFirstSearch(list, 3);
