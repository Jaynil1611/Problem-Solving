/**
 * https://takeuforward.org/data-structure/detect-cycle-in-a-directed-graph-using-dfs-g-19/
 * SC -> O(N) + O(N)
 * TC -> O(N + E)  (since it's a directed graph, so only on direction edges will be counted)
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

function depthFirstSearch(node, adjList, visited, pathVisited) {
  visited[node] = 1;
  pathVisited[node] = 1;

  for (let neighbour of adjList.get(node)) {
    if (!visited[neighbour]) {
      if (depthFirstSearch(neighbour, adjList, visited, pathVisited) === true) {
        return true;
      }
    } else if (pathVisited[neighbour]) {
      return true;
    }
  }

  pathVisited[node] = 0;
  return false;
}

function detectCycleDirected(adjList) {
  const size = adjList.size;
  const visited = new Array(size + 1).fill(0);
  /**
   You can get rid of pathVisited extra space by marking visited[node] = 2 for pathVisit 
   & mark visited[node] = 1 while backtracking
   */
  const pathVisited = Array.from(visited);

  for (let i = 1; i < size; i++) {
    if (!visited[i]) {
      if (depthFirstSearch(i, adjList, visited, pathVisited) === true) {
        return true;
      }
    }
  }
  return false;
}

const edges = [
  new Edge(1, 2),
  new Edge(2, 3),
  new Edge(3, 4),
  new Edge(3, 7),
  new Edge(4, 5),
  new Edge(5, 6),
  new Edge(7, 5),
  new Edge(8, 2),
  new Edge(8, 9),
  new Edge(9, 10),
  new Edge(10, 8),
];

const graph = new Graph(edges);
const list = graph.getAdjList();
console.log(detectCycleDirected(list));
