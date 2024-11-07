/*
https://takeuforward.org/data-structure/number-of-provinces/
SC -> O(N)   (ignoring the adjacency list)
TC -> O(N)
*/

function converAdjMatrixToList(adjMatrix) {
  const size = adjMatrix.length;
  const adjList = Array.from({ length: size }, () => new Array(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (adjMatrix[i][j] === 1 && i != j) {
        adjList[i].push(j);
        adjList[j].push(i);
      }
    }
  }
  return adjList;
}

function depthFirstSearch(node, adjList, visited) {
  visited[node] = 1;
  for (let neighbour of adjList[node]) {
    if (!visited[neighbour]) {
      depthFirstSearch(neighbour, adjList, visited);
    }
  }
}

function numberOfProvince(adjMatrix) {
  const size = adjMatrix.length;
  const adjList = converAdjMatrixToList(adjMatrix);
  const visited = new Array(size).fill(0);
  let result = 0;

  for (let i = 0; i < size; i++) {
    if (!visited[i]) {
      result++;
      depthFirstSearch(i, adjList, visited);
    }
  }
  console.log(result);
}

const adjMatrix = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];

numberOfProvince(adjMatrix);
