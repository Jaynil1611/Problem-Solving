/**
 * https://takeuforward.org/data-structure/maximum-depth-of-a-binary-tree/
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
  const hr = maximumDepthOfTree(root.right);
  return 1 + Math.max(hl, hr);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(6);
root.right.left.left = new Node(5);
console.log(maximumDepthOfTree(root));
