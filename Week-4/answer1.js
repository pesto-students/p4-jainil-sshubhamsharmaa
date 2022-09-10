/* Implement a function named getNumber which generates a random number. 
If randomNumberis divisible by 5 it will reject the promise else it will resolve the promise. 
Let’s also keep the promise resolution/rejection time as a variable.
1.JS promises should not be used.
2.A custom promise function should be created.
3.This function should be able to handle all 3 states Resolve, Reject and Fulfilled.
4.Should be able to accept callbacks as props.*/

function getNumber() {
  return new Promise((resolve, reject) => {
    var randomNumber = Math.floor(Math.random() * 100 + 1);
    //generate random number between 1 and 100
    if (randomNumber % 5 == 0) {
      reject(randomNumber + " is divisible by 5");
    } else resolve(randomNumber + " is not divisible by 5");
  });
}

getNumber()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
