/**
 * https://takeuforward.org/data-structure/alien-dictionary-topological-sort-g-26/
 * SC -> O(4k) ~ O(k)
 * TC -> O(N*len) + O(K+E) where len is the index where the first inequality occurs
 */

function alienDictionary(n, k, dict) {
  const adjList = new Map();
  for (let i = 0; i < k; i++) {
    adjList.set(i, []);
  }
  const initialCharCode = "a".charCodeAt(0);

  for (let i = 0; i < n - 1; i++) {
    const s1 = dict[i];
    const s2 = dict[i + 1];
    const len = Math.min(s1.length, s2.length);
    for (let j = 0; j < len; j++) {
      if (s1[j] != s2[j]) {
        const first = s1[j].charCodeAt(0) - initialCharCode;
        const second = s2[j].charCodeAt(0) - initialCharCode;
        adjList.get(first).push(second);
        break;
      }
    }
  }

  const queue = [];
  const indegree = new Array(n).fill(0);
  let result = [];

  for (let node of adjList.keys()) {
    for (let neighbour of adjList.get(node)) {
      indegree[neighbour]++;
    }
  }

  for (let i = 0; i < k; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (let neighbour of adjList.get(node)) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) {
        queue.push(neighbour);
      }
    }
  }

  if (result.length !== k) {
    return "";
  }

  return (result = result
    .map((elem) => String.fromCharCode(elem + initialCharCode))
    .join(" "));
}

const dictionary = ["baa", "abcd", "abca", "cab", "cad"];

console.log(alienDictionary(5, 4, dictionary));

/**
 * Follow up test cases
 * 
 * if dictionary is ['abcd','abc']
 * in this case order is not possible
 * since everything is matching && larger string is before shorter string -> then order is not possible
 * 
 * 
 * if dictionary is ['abc','bat','ade']
 * then it is a cyclic dependency: a -> b -> a
 * in this case, order is not possible.
 */