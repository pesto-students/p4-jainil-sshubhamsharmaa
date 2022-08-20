/*
Refactor the above stack implementation, using the concept of closure, 
such that there is noway to access items array outside of createStack() function scope:

Guidelines:
2.The candidate should be able to refactor the code and get the desired output.
3.The candidate should be able to explain the code why it was not working before.
4.The candidate should be able to explain the code why it is working now.

Outcome:
3.The candidates will understand how ‘closure’ works in JS.
4. The candidates will understand how ‘encapsulation’ works in JS.
*/

function createStack() {
  let items = [];
  return {
    push(item) {
      items.push(item);
      console.log("inside push function");
    },
    pop() {
      console.log("inside pop function");
      return items.pop();
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items);
