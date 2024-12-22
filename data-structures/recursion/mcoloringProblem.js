/**
 * https://takeuforward.org/data-structure/m-coloring-problem/
 *
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

function isPossible(node, k, color, graph, n) {
  for (let i = 0; i < n; i++) {
    if (k != node && graph.get(node).includes(i) && color[i] === k) {
      return false;
    }
  }
  return true;
}

function solve(node, color, graph, n, m) {
  if (node === n) {
    return true;
  }

  for (let i = 0; i < m; i++) {
    if (isPossible(node, i, color, graph, n)) {
      color[node] = i;
      if (solve(node + 1, color, graph, n, m)) {
        return true;
      }
      color[node] = 0;
    }
  }
  return false;
}

function mcoloringProblem(graph, n, m) {
  const color = new Array(m).fill(0);
  const res = solve(0, color, graph, n, m);
  return res;
}

const edges = [
  new Edge(0, 1),
  new Edge(0, 2),
  new Edge(1, 0),
  new Edge(1, 2),
  new Edge(2, 0),
  new Edge(2, 1),
  new Edge(2, 3),
  new Edge(3, 0),
  new Edge(3, 2),
];

const N = 4;
const M = 3;
const graph = new Graph(edges);
const list = graph.getAdjList();
console.log(mcoloringProblem(list, N, M));
