// Level order traversal

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
printLevelOrderTraversal();

function printLevelOrderTraversal() {
  var h = height(root);
  for (let i = 1; i <= h; i++) {
    printCurrentLevel(root, i);
  }
}

function height(root) {
  if (root == null) return 0;
  else {
    var heightLeft = height(root.left);
    var heightRight = height(root.right);
    return heightLeft > heightRight ? heightLeft + 1 : heightRight + 1;
  }
}

function printCurrentLevel(root, level) {
  if (root == null) return;
  if (level == 1) console.log(root.data);
  else if (level > 1) {
    printCurrentLevel(root.left, level - 1);
    printCurrentLevel(root.right, level - 1);
  }
}
