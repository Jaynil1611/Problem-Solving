/**
 * https://takeuforward.org/data-structure/topological-sort-algorithm-dfs-g-21/
 * SC -> O(N) + O(N)
 * TC -> O(N + E)
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

function depthFirstSearch(node, adjList, visited, result) {
  visited[node] = 1;

  for (let neighbour of adjList.get(node)) {
    if (!visited[neighbour]) {
      depthFirstSearch(neighbour, adjList, visited, result);
    }
  }

  result.push(node);
}

function topologicalSort(adjList) {
  const size = adjList.size;
  const visited = new Array(size + 1).fill(0);
  const result = [];

  for (let i = 0; i < size; i++) {
    if (!visited[i]) {
      depthFirstSearch(i, adjList, visited, result);
    }
  }

  let order = "";
  for (let i = result.length - 1; i >= 0; i--) {
    order += `${result[i]} `;
  }

  return order;
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
