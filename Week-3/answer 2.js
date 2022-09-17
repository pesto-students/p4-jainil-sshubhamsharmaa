/*Exercise 3.2:

Create 3 simple functions where call, bind and apply are used. The intention of this exercise is 
to understand how they work and their differences.(0.5 hours)

Guidelines:
1.The candidate should be able to explain what call, bind and apply in JS are and its differences.
2.Using live examples the candidate should be able to differentiate between them.

Outcome:
1.Call, Bind, Apply are very important JS concepts.
2.This exercise should help understand them and also understand the differences betweenthem.
3.Writing examples for the same will help the candidate have a better understanding ofwhen and how
 they are used in real world scenarios. */

var car = {
  registrationNumber: "GA12345",
  brand: "Hyundai",

  displayDetails: function (ownerName) {
    console.log(
      ownerName +
        ", this is your car: " +
        this.registrationNumber +
        " " +
        this.brand
    );
  },
};

var myCarDetails = car.displayDetails.bind(car, "Shubham"); // Shubham, this is your car: GA12345 Hyundai
displayDetails.apply(car, ["Shubham"]); // Shubham, this is your car: GA12345 Hyundai
displayDetails.call(car, "Shubham"); // Shubham, this is your car: GA12345 Hyundai
