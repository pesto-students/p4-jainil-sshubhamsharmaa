//Implement a Queue using 2 stack
class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enQueue(x) {
    while (this.stack1.length != 0) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(x);
    while (this.stack2.length != 0) {
      this.stack1.push(this.stack2.pop());
    }
  }
  deQueue() {
    if (this.stack1.length == 0) console.log("Queue is empty");
    let x = this.stack1[this.stack1.length - 1];
    this.stack1.pop();
    console.log(x + " removed from queue");
  }
}
let queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);

queue.deQueue();
queue.deQueue();

// The enqueue operation is of complexity O(n)
// The dequeue operation is of complexity O(1)
