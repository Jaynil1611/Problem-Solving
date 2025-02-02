/**
 * https://takeuforward.org/graph/bipartite-graph-bfs-implementation/
 * https://takeuforward.org/graph/bipartite-graph-dfs-implementation/
 * Same time & space for BFS & DFS
 * SC - > O(N) + O(N)
 * TC - > O(N + 2E)
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

function breadthFirstSearch(startingNode, adjList, color) {
  const queue = [];
  color[startingNode] = 0;
  queue.push(startingNode);

  while (queue.length) {
    const node = queue.shift();
    const nodeColor = color[node];

    for (let neighbour of adjList.get(node)) {
      if (color[neighbour] === -1) {
        color[neighbour] = nodeColor === 0 ? 1 : 0;
        queue.push(neighbour);
      } else if (color[neighbour] === nodeColor) {
        return false;
      }
    }
  }

  return true;
}

function depthFirstSearch(startingNode, nodeColor, adjList, color) {
  color[startingNode] = nodeColor;

  for (let neighbour of adjList.get(startingNode)) {
    if (color[neighbour] === -1) {
      if (depthFirstSearch(neighbour, !nodeColor, adjList, color) === false) {
        return false;
      }
    } else if (color[neighbour] === nodeColor) {
      return false;
    }
  }
  return true;
}

function checkIfGraphIsBipartite(adjList) {
  const size = adjList.size;
  const color = new Array(size + 1).fill(-1);

  // for connected components of the graph
  for (let i = 1; i < size; i++) {
    if (color[i] === -1) {
      // if (breadthFirstSearch(i, adjList, color) === false) {
      //   return false;
      // }
      if (depthFirstSearch(i, 0, adjList, color) === false) {
        return false;
      }
    }
  }
  return true;
}

const bipartiteEdges = [
  new Edge(1, 2),
  new Edge(2, 1),
  new Edge(2, 3),
  new Edge(2, 5),
  new Edge(3, 2),
  new Edge(3, 4),
  new Edge(4, 3),
  new Edge(4, 5),
  new Edge(4, 6),
  new Edge(5, 2),
  new Edge(5, 4),
  new Edge(6, 4),
];

const notBipartiteEdges = [
  new Edge(1, 2),
  new Edge(2, 1),
  new Edge(2, 3),
  new Edge(2, 6),
  new Edge(3, 2),
  new Edge(3, 4),
  new Edge(4, 3),
  new Edge(4, 5),
  new Edge(4, 7),
  new Edge(5, 4),
  new Edge(5, 6),
  new Edge(6, 2),
  new Edge(6, 5),
  new Edge(7, 4),
  new Edge(7, 8),
  new Edge(8, 7),
];

const graph = new Graph(notBipartiteEdges);
const list = graph.getAdjList();
console.log(checkIfGraphIsBipartite(list));
