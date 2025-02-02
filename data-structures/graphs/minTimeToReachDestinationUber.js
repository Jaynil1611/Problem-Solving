/**
 * https://leetcode.com/discuss/interview-question/5817816/Frog-DSA-round-question
 *
 * Given a frog with limited energy capacity standing on a source node. Initially, it has full energy. Moving from one node to another result in a reduction in energy by 1 and an increase in time by 1. There are energy drinks present at some nodes that it can make use of to increase energy. If its energy reduces to 0, it dies. Find the minimum time taken by the frog to reach the destination node. If it is impossible return -1.
 * 
 * TC -> O(V + 2E) + O(V + 2E) (logV)
 */

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
    this.queue.sort((a, b) => a[0] - b[0]); // Sort by time (min-heap)
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

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

    if (adj.has(dest)) {
      adj.get(dest).push(src);
    } else {
      adj.set(dest, [src]);
    }
  }

  for (let i = 0; i < size; i++) {
    if (!adj.has(i)) {
      adj.set(i, []);
    }
  }

  this.getAdjList = () => adj;
};

function minTimeToDestination(
  adjList,
  energyDrinks,
  source,
  destination,
  maxEnergy
) {
  const queue = new PriorityQueue();
  const visited = new Set();

  queue.enqueue([0, source, maxEnergy]);
  visited.add(`${source}${maxEnergy}`);

  while (!queue.isEmpty()) {
    const [time, node, energy] = queue.dequeue();

    if (node === destination) {
      return time;
    }

    const newEnergy = energyDrinks.has(node) ? maxEnergy : energy;

    for (let neighbour of adjList.get(node)) {
      const neighbourEnergy = newEnergy - 1;
      const state = `${neighbour}${neighbourEnergy}`;
      if (newEnergy > 0 && !visited.has(state)) {
        visited.add(state);
        queue.enqueue([time + 1, neighbour, neighbourEnergy]);
      }
    }
  }
  return -1;
}

/** Graph with cycles
 * const edges = [
  new Edge(0, 1),
  new Edge(0, 3),
  new Edge(1, 2),
  new Edge(2, 3),
  new Edge(2, 4),
];
 */

const edges = [
  new Edge(0, 1),
  new Edge(1, 2),
  new Edge(2, 3),
  new Edge(3, 4),
  new Edge(4, 5),
];
const graph = new Graph(edges);
const list = graph.getAdjList();
let energyDrinks = new Set([2, 4]); // Energy drinks at nodes 2 and 4
let source = 0,
  destination = 5,
  maxEnergy = 3;

console.log(
  minTimeToDestination(list, energyDrinks, source, destination, maxEnergy)
); // Expected Output: 5
