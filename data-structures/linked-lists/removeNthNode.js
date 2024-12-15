/**
 * https://takeuforward.org/data-structure/remove-n-th-node-from-the-end-of-a-linked-list/
 *
 * TC -> O(len)
 * SC -> O(1)
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function removeNthNodeFromLinkedList(head, N) {
  let fast = head;
  let slow = head;

  for (let i = 0; i < N; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  if (fast === null) {
    return head.next;
  }

  slow.next = slow.next.next;
  return head;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log(JSON.stringify(removeNthNodeFromLinkedList(head, 3)));
