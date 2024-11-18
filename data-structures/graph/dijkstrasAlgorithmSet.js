function Edge(src, dest,weight) {
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

function dijkstraShortestPath(adjList, source, N) {
  const set = new Set();
  const distance = new Array(N).fill(Number.POSITIVE_INFINITY);

  distance[source] = 0;
  set.add([0, source]);

  while (set.size != 0) {
    const pair = set.values().next().value;
    set.delete(pair);

    const currDistance = pair[0];
    const node = pair[1];

    for (let neighbourPair of adjList.get(node)) {
      const neighbour = neighbourPair[0];
      const weight = neighbourPair[1];

      if (currDistance + weight < distance[neighbour]) {
        if (distance[neighbour] !== Number.POSITIVE_INFINITY) {
          set.delete([distance[neighbour], neighbour]);
        }
        distance[neighbour] = currDistance + weight;
        set.add([distance[neighbour], neighbour]);
      }
    }
  }

  return distance;
}

const edges = [
  new Edge(0, 1, 4),
  new Edge(0, 2, 4),
  new Edge(1, 2, 2),
  new Edge(1, 0, 4),
  new Edge(2, 3, 3),
  new Edge(2, 4, 1),
  new Edge(2, 5, 6),
  new Edge(3, 2, 3),
  new Edge(3, 5, 2),
  new Edge(4, 2, 1),
  new Edge(4, 5, 3),
  new Edge(5, 2, 6),
  new Edge(5, 3, 2),
  new Edge(5, 4, 3),
];

const graph = new Graph(edges, 6);
const list = graph.getAdjList();
console.log(dijkstraShortestPath(list, 0, 6));
