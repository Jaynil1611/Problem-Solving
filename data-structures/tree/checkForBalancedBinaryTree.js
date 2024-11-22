/**
 * https://takeuforward.org/data-structure/check-if-the-binary-tree-is-balanced-binary-tree/
 * SC -> O(N)
 * TC -> O(N)
 */

function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

function maximumDepthOfTree(root) {
  if (root === null) {
    return 0;
  }

  const hl = maximumDepthOfTree(root.left);
  if (hl === -1) return -1;

  const hr = maximumDepthOfTree(root.right);
  if (hr === -1) return -1;

  if (Math.abs(hl - hr) > 1) {
    return -1;
  }

  return 1 + Math.max(hl, hr);
}

const root = new Node(1);
root.right = new Node(2);
root.left = new Node(3);
root.left.left = new Node(5);
root.left.right = new Node(4);
root.left.left.left = new Node(7);
root.left.left.right = new Node(6);
console.log(maximumDepthOfTree(root));
