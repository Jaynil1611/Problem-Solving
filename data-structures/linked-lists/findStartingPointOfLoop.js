/**
 * https://takeuforward.org/data-structure/starting-point-of-loop-in-a-linked-list/
 *
 * TC -> O(2N)
 * SC -> O(1)
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function findStartingPointOfLoop(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  if (slow != fast) {
    return null;
  }

  fast = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head.next.next;
console.log(findStartingPointOfLoop(head));
