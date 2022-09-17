//Problem 7.1 : Reverse the Linked list

var head;
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function reverse(head) {
  if (head == null || head.next == null) return head;
  var rest = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return rest;
}

function print() {
  var temp = head;
  while (temp != null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

function push(data) {
  var temp = new Node(data);
  temp.next = head;
  head = temp;
}
push(20);
push(4);
push(15);
push(85);

console.log("Given linked list: ");
print();

head = reverse(head);

console.log("Reversed Linked list");
print();
