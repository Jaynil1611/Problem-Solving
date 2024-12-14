/**
 * https://takeuforward.org/data-structure/merge-two-sorted-linked-lists/
 *
 * TC -> O(N1 + N2)
 * SC -> O(1)
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function mergeSortedLinkedLists(head1, head2) {
  let t1 = head1;
  let t2 = head2;
  const dummyNode = new Node(-1);
  let temp = dummyNode;

  while (t1 && t2) {
    if (t1.data <= t2.data) {
      temp.next = t1;
      temp = t1;
      t1 = t1.next;
    } else {
      temp.next = t2;
      temp = t2;
      t2 = t2.next;
    }
  }

  if (t1) {
    temp.next = t1;
  } else {
    temp.next = t2;
  }
  return dummyNode.next;
}

let head1 = new Node(1);
head1.next = new Node(3);
head1.next.next = new Node(5);

let head2 = new Node(2);
head2.next = new Node(4);
head2.next.next = new Node(6);
head2.next.next.next = new Node(7);
console.log(JSON.stringify(mergeSortedLinkedLists(head1, head2)));
