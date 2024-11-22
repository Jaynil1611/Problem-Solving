/**
 * https://takeuforward.org/data-structure/level-order-traversal-of-a-binary-tree/
 * SC -> O(N)
 * TC -> O(N)
 */

function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

function levelOrderTraversal(root) {
  const queue = [];
  const result = [];

  queue.push(root);

  while (queue.length) {
    const length = queue.length;
    const temp = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      temp.push(node.data);
    }
    result.push(temp);
  }
  return result;
}

const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(levelOrderTraversal(root));
