/**
 * https://takeuforward.org/data-structure/morris-inorder-traversal-of-a-binary-tree/
 * TC -> O(N)
 * SC -> O(1)
 */

function Node(data) {
  this.left = null;
  this.right = null;
  this.data = data;
}

function morrisInorder(root) {
  const inorder = [];
  let curr = root;
  while (curr) {
    // left is null, print current node & go to right (left = null, root, right)
    if (curr.left === null) {
      inorder.push(curr.data);
      curr = curr.right;
    } else {
      // before going to left, find right most node in left subtree
      let prev = curr.left;
      while (prev.right && prev.right !== curr) {
        prev = prev.right;
      }
      // make a thread to current node, then go left
      if (prev.right === null) {
        prev.right = curr;
        curr = curr.left;
      } else {
        // thread exists, remove it & go to right
        prev.right = null;
        inorder.push(curr.data);
        curr = curr.right;
      }
    }
  }
  return inorder;
}

function morrisPreorder(root) {
  const inorder = [];
  let curr = root;
  while (curr) {
    if (curr.left === null) {
      inorder.push(curr.data);
      curr = curr.right;
    } else {
      let prev = curr.left;
      while (prev.right && prev.right !== curr) {
        prev = prev.right;
      }

      if (prev.right === null) {
        prev.right = curr;
        inorder.push(curr.data);
        curr = curr.left;
      } else {
        prev.right = null;
        curr = curr.right;
      }
    }
  }
  return inorder;
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
console.log(morrisInorder(root));
console.log(morrisPreorder(root));
