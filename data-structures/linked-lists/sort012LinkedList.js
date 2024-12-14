/**
 * https://www.geeksforgeeks.org/sort-a-linked-list-of-0s-1s-or-2s/
 * https://www.youtube.com/watch?v=gRII7LhdJWc
 *
 * TC -> O(N)
 * SC -> O(1)
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function sortLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }
  let temp = head;

  const zeroHead = new Node(-1);
  let zero = zeroHead;
  const oneHead = new Node(-1);
  let one = oneHead;
  const twoHead = new Node(-1);
  let two = twoHead;

  while (temp) {
    if (temp.data === 0) {
      zero.next = temp;
      zero = temp;
    } else if (temp.data === 1) {
      one.next = temp;
      one = temp;
    } else {
      two.next = temp;
      two = temp;
    }
    temp = temp.next;
  }

  if (oneHead.next != null) {
    zero.next = oneHead.next;
  } else {
    zero.next = twoHead.next;
  }
  one.next = twoHead.next;
  two.next = null;
  return zeroHead.next;
}

let head = new Node(1);
head.next = new Node(0);
head.next.next = new Node(1);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(0);
head.next.next.next.next.next = new Node(2);
head.next.next.next.next.next.next = new Node(1);
console.log(JSON.stringify(sortLinkedList(head)));
