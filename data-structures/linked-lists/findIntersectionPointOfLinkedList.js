/**
 * https://takeuforward.org/data-structure/find-intersection-of-two-linked-lists/
 *
 * TC -> O(N1 + N2)
 * SC -> O(1)
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function findIntersectionPoint(head1, head2) {
  if (!head1 || !head2) {
    return null;
  }

  let temp1 = head1;
  let temp2 = head2;

  while (temp1 != temp2) {
    temp1 = temp1.next;
    temp2 = temp2.next;

    if (temp1 === temp2) return temp1;

    if (!temp1) {
      temp1 = head2;
    }
    if (!temp2) {
      temp2 = head1;
    }
  }
  return temp1;
}

let head1 = new Node(3);
head1.next = new Node(1);
head1.next.next = new Node(4);
head1.next.next.next = new Node(6);
head1.next.next.next.next = new Node(2);

let head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(4);
head2.next.next.next = new Node(5);
head2.next.next.next.next = head1.next.next;
console.log(findIntersectionPoint(head1, head2));
