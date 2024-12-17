/**
 * https://takeuforward.org/data-structure/check-if-given-linked-list-is-plaindrome/
 *
 * TC -> O(2N)
 * SC -> O(1)
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function reverse(head) {
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

function checkIfLinkedListPalindrome(head) {
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const newHead = reverse(slow.next);
  let first = head;
  let second = newHead;

  while (second) {
    if (first.data !== second.data) {
      reverse(newHead);
      return false;
    }

    first = first.next;
    second = second.next;
  }
  reverse(newHead);
  console.log(JSON.stringify(head));
  return true;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(1);
console.log(checkIfLinkedListPalindrome(head));
