// Implement Fibonacci Series with Iterators

let fibObj = {
  one: 0,
  two: 1,
  temp: 0,

  [Symbol.iterator]() {
    return this;
  },

  next() {
    this.temp = this.two;
    this.two = this.temp + this.one;
    this.one = this.temp;
    return { value: this.two };
  },
};
//change the value of i to get the desired output
for (let i = 0; i < 10; i++) {
  console.log(fibObj.next().value);
}
