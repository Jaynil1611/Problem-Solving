/**
 * https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions
 *
 * TC -> O(V*(V+E))
 * SC -> O(N+M)
 */

function makeGraph(pairs, rates) {
  const graph = new Map();

  for (let i = 0; i < pairs.length; i++) {
    const [source, dest] = pairs[i];
    const cost = rates[i];

    if (!graph.has(source)) graph.set(source, []);
    if (!graph.has(dest)) graph.set(dest, []);

    graph.get(source).push([dest, cost]);
    graph.get(dest).push([source, 1.0 / cost]);
  }
  return graph;
}

function bfs(graph, source, initialCost) {
  const costMap = new Map();
  const queue = [[source, initialCost]];
  costMap.set(source, initialCost);

  while (queue.length > 0) {
    const [node, cost] = queue.shift();

    for (let [newNode, newCost] of graph.get(node)) {
      const amount = cost * newCost;
      if (!costMap.has(newNode) || amount > costMap.get(newNode)) {
        costMap.set(newNode, amount);
        queue.push([newNode, amount]);
      }
    }
  }
  return costMap;
}

function maximiseAmountAfterTwoDaysConversion(
  initialCurrency,
  pairs1,
  rates1,
  pairs2,
  rates2
) {
  const graph1 = makeGraph(pairs1, rates1);
  const graph2 = makeGraph(pairs2, rates2);
  const initialCost = 1.0;
  let maxAmount = 0.0;

  const firstAmount = bfs(graph1, initialCurrency, initialCost);

  for (const [node, cost] of firstAmount.entries()) {
    const secondAmount = bfs(graph2, node, cost);

    maxAmount = Math.max(maxAmount, secondAmount.get(initialCurrency) || 0);
  }

  return maxAmount;
}

const initialCurrency = "EUR";
const pairs1 = [
  ["EUR", "USD"],
  ["USD", "JPY"],
];
const rates1 = [2.0, 3.0];
const pairs2 = [
  ["JPY", "USD"],
  ["USD", "CHF"],
  ["CHF", "EUR"],
];
const rates2 = [4.0, 5.0, 6.0];
console.log(
  maximiseAmountAfterTwoDaysConversion(
    initialCurrency,
    pairs1,
    rates1,
    pairs2,
    rates2
  )
);
