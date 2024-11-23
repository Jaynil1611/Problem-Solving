/**
 * https://takeuforward.org/data-structure/maximum-sum-path-in-binary-tree/
 * SC -> O(N) (recursion stack space)
 * TC -> O(N)
 */

function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

function findPathSum(root, maxSum) {
  if (root === null) return 0;

  let pathSumLeft = 0;
  let pathSumRight = 0;

  // ignore the negative leftsum or rightsum & start new path from the current node
  pathSumLeft = Math.max(0, findPathSum(root.left, maxSum));
  pathSumRight = Math.max(0, findPathSum(root.right, maxSum));

  maxSum.value = Math.max(maxSum.value, root.data + pathSumLeft + pathSumRight);

  return root.data + Math.max(pathSumLeft, pathSumRight);
}

function maxPathSum(root) {
  let maxSum = { value: Number.NEGATIVE_INFINITY };

  findPathSum(root, maxSum);

  return maxSum.value;
}

const root = new Node(-10);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);
console.log(maxPathSum(root));
