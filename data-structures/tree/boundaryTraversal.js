/**
 * https://takeuforward.org/data-structure/boundary-traversal-of-a-binary-tree/
 * SC -> O(N)
 * TC -> O(N)
 */

function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

function isLeaf(root) {
  return root.left === null && root.right === null;
}

function leftBoundary(root, result) {
  let node = root.left;
  while (node) {
    if (!isLeaf(node)) result.push(node.data);
    if (node.left) node = node.left;
    else node = node.right;
  }
}

function leafNodes(node, result) {
  if (isLeaf(node)) {
    result.push(node.data);
    return;
  }
  if (node.left) leafNodes(node.left, result);
  if (node.right) leafNodes(node.right, result);
}

function rightBoundary(root, result) {
  let node = root.right;
  const temp = [];

  while (node) {
    if (!isLeaf(node)) temp.push(node.data);
    if (node.right) node = node.right;
    else node = node.left;
  }

  for (let i = temp.length - 1; i >= 0; i--) {
    result.push(temp[i]);
  }
}

function boundaryTravrsal(root) {
  const result = [];
  if (!root) return result;

  if (!isLeaf(root)) result.push(root.data);

  leftBoundary(root, result);

  leafNodes(root, result);

  rightBoundary(root, result);

  return result;
}

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);
root.left.left = new Node(3);
root.left.right = new Node(8);
root.right.left = new Node(18);
root.right.right = new Node(25);
root.left.right.right = new Node(7);
console.log(boundaryTravrsal(root));
