/**
 * https://takeuforward.org/data-structure/calculate-the-diameter-of-a-binary-tree/
 * SC -> O(N)
 * TC -> O(N)
 */

function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

function heightOfTree(root, maxDiameter) {
  if (root === null) {
    return 0;
  }

  const hl = heightOfTree(root.left, maxDiameter);
  const hr = heightOfTree(root.right, maxDiameter);

  maxDiameter.value = Math.max(maxDiameter.value, hl + hr);

  return 1 + Math.max(hl, hr);
}

function diameterOfTree(root) {
  const maxDiameter = { value: 0 };

  heightOfTree(root, maxDiameter);

  return maxDiameter.value;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(7);
root.right.left.left = new Node(5);
root.right.right.right = new Node(8);
root.right.left.left.left = new Node(6);
root.right.right.right.right = new Node(9);
console.log(diameterOfTree(root));
