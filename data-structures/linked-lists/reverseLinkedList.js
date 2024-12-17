/**
 * https://takeuforward.org/data-structure/reverse-a-linked-list/
 *
 * TC -> O(N)
 * SC -> O(1)
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function reverseLinkedListIterative(head) {
  if (!head || !head.next) {
    return head;
  }

  let temp = head;
  let prev = null;

  while (temp) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}

// Space Complexity -> O(N) Recursion stack space
function reverseLinkedListRecursive(head) {
  if (!head || !head.next) {
    return head;
  }

  const newHead = reverseLinkedListRecursive(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;
  return newHead;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log(JSON.stringify(reverseLinkedListIterative(head)));
