// Problem 8.1: Maximum Depth of Binary Tree

class Node {
  constructor() {
    this.left = this.right = null;
  }
}

function maxDepth(node) {
  if (node == null) return -1;
  else {
    let LeftDepth = maxDepth(node.left);
    let RightDepth = maxDepth(node.right);
    return LeftDepth > RightDepth ? LeftDepth + 1 : RightDepth + 1;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.right = new Node(6);
root.right.right.right = new Node(7);
console.log(maxDepth(root));
