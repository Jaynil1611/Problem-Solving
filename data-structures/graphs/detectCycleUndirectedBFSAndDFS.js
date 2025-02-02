/**
 * https://takeuforward.org/data-structure/detect-cycle-in-an-undirected-graph-using-bfs/
 * SC -> O(N) + O(N)
 * TC -> O(N + 2E) + O(N)
 *
 * https://takeuforward.org/data-structure/detect-cycle-in-an-undirected-graph-using-dfs/
 * SC -> O(N) + O(N)
 * TC -> O(N + 2E) + O(N)
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

function breadthFirstSearch(src, adjList, visited) {
  const queue = [];
  visited[src] = 1;
  queue.push([src, -1]);

  while (queue.length) {
    const [node, parent] = queue.shift();

    for (let neighbour of adjList.get(node)) {
      if (!visited[neighbour]) {
        visited[neighbour] = 1;
        queue.push([neighbour, node]);
      } else if (parent != neighbour) {
        return true;
      }
    }
  }
  return false;
}

function depthFirstSearch(node, parent, adjList, visited) {
  visited[node] = 1;

  for (let neighbour of adjList.get(node)) {
    if (!visited[neighbour]) {
      if (depthFirstSearch(neighbour, node, adjList, visited)) {
        return true;
      }
    } else if (parent != neighbour) {
      return true;
    }
  }
  return false;
}

function detectCyle(adjList) {
  const size = adjList.size;
  const visited = new Array(size + 1).fill(0);

  for (let i = 1; i < size; i++) {
    if (!visited[i]) {
      // if (breadthFirstSearch(i, adjList, visited)) {
      //   return true;
      // }
      if (depthFirstSearch(i, -1, adjList, visited)) {
        return true;
      }
    }
  }
  return false;
}

const edges = [
  new Edge(1, 2),
  new Edge(1, 3),
  new Edge(2, 1),
  new Edge(2, 5),
  new Edge(3, 1),
  new Edge(3, 4),
  new Edge(3, 6),
  new Edge(4, 3),
  new Edge(5, 2),
  new Edge(5, 7),
  new Edge(6, 3),
  new Edge(6, 7),
  new Edge(7, 5),
  new Edge(7, 6),
];

const graph = new Graph(edges);
const list = graph.getAdjList();
console.log(detectCyle(list));
