/* Create an object called Teacher derived from the Person class, and implement a method 
called teach which receives a string called subject, 
and prints out:[teacher's name]is now teaching[subject]
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  teach(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
  }
}

let teacher = new Teacher("John", 30, "Math");
teacher.teach("Math");
