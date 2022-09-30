// Problem 8.2 : Validate a Binary Tree

class Node {
  constructor(val) {
    this.data = val;
    this.right = this.left = null;
  }
}

var list = [];

function inOrder(root) {
  if (root) {
    inOrder(root.left);
    list.push(root.data);
    inOrder(root.right);
  }
}

function isSorted(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] < list[i]) return false;
  }
  return true;
}

let root = new Node(7);
root.left = new Node(5);
root.right = new Node(10);
root.left.left = new Node(1);
root.left.right = new Node(6);
root.right.left = new Node(8);
root.right.right = new Node(12);
inOrder(root);

console.log(isSorted(list));
