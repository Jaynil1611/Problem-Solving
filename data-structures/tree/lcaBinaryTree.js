/**
 * https://takeuforward.org/data-structure/lowest-common-ancestor-for-two-given-nodes/
 * 
 */

function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

function lowestCommonAncestorBinaryTree(root, first, second) {
  if (!root) {
    return null;
  }

  if (root.data === first || root.data === second) {
    return root.data;
  }

  const leftValue = lowestCommonAncestorBinaryTree(root.left, first, second);
  const rightValue = lowestCommonAncestorBinaryTree(root.right, first, second);

  if (leftValue && rightValue) {
    return root.data;
  }

  return leftValue ?? rightValue;
}

const root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.right.left = new Node(7);
root.right.right = new Node(6);
root.right.right.left = new Node(8);
root.left.left = new Node(3);
root.left.left.right = new Node(9);
root.left.left.right.left = new Node(1);
console.log(lowestCommonAncestorBinaryTree(root, 9, 8));
