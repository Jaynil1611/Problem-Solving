/**
 * https://takeuforward.org/data-structure/find-eventual-safe-states-dfs-g-20/
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

function depthFirstSearch(node, adjList, visited, pathVisited, N) {
  visited[node] = 1;
  pathVisited[node] = 1;

  for (let neighbour of adjList.get(node)) {
    if (!visited[neighbour]) {
      if (depthFirstSearch(neighbour, adjList, visited, pathVisited, N)) {
        return true;
      }
    } else if (pathVisited[neighbour]) {
      return true;
    }
  }

  pathVisited[node] = 0;
  return false;
}

function findEventualSafeStates(adjList, N) {
  const visited = new Array(N).fill(0);
  const pathVisited = new Array(N).fill(0);
  const result = [];

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      depthFirstSearch(i, adjList, visited, pathVisited, N);
    }
  }

  for (let i = 0; i < N; i++) {
    if (pathVisited[i] === 0) {
      result.push(i);
    }
  }

  return result;
}

const edges = [
  new Edge(0, 1),
  new Edge(0, 2),
  new Edge(1, 2),
  new Edge(1, 3),
  new Edge(2, 5),
  new Edge(3, 0),
  new Edge(4, 5),
  new Edge(7, 1),
];

const edges2 = [
  new Edge(0, 1),
  new Edge(1, 2),
  new Edge(2, 0),
  new Edge(2, 3),
];

const graph = new Graph(edges);
const list = graph.getAdjList();
console.log(findEventualSafeStates(list, 8));
