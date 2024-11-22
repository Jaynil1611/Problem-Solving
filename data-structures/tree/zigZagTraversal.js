/**
 * https://takeuforward.org/data-structure/zig-zag-traversal-of-binary-tree/
 * SC -> O(N)
 * TC -> O(N)
 */

function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

function zigZagTraversal(root) {
  const queue = [];
  const result = [];
  let flag = true;

  queue.push(root);

  while (queue.length) {
    const length = queue.length;
    const temp = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      const index = flag ? i : length - i - 1;
      temp[index] = node.data;
    }
    result.push(temp);
    flag = !flag;
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
console.log(zigZagTraversal(root));
