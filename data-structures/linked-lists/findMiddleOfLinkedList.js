/**
 * https://takeuforward.org/data-structure/find-middle-element-in-a-linked-list/
 * 
 * TC -> O(N/2)
 * SC -> O(1)
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function findMiddleOfLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(findMiddleOfLinkedList(head));
