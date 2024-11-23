function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

function maxWidthOfBinaryTree(root) {
  if (!root) return 0;

  const queue = [];
  let ans = 0;
  queue.push([root, 0]);

  while (queue.length) {
    const size = queue.length;
    const minIndex = queue[0][1];
    let first, last;

    for (let i = 0; i < size; i++) {
      const [node, index] = queue.shift();
      const currIndex = index - minIndex;

      if (node.left) {
        queue.push([node.left, 2 * currIndex + 1]);
      }
      if (node.right) {
        queue.push([node.right, 2 * currIndex + 2]);
      }

      if (i === 0) first = currIndex;
      if (i === size - 1) last = currIndex;
    }
    ans = Math.max(ans, last - first + 1);
  }
  return ans;
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
