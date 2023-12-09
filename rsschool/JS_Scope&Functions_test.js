// function sayWord(word) {
//   return () => console.log(word);
// }

// const sayHello = sayWord('hello');

// sayHello(); // "hello"

/*** task 1 ***/
//  What will the code below output to the console?

var name = 'John';

var user = {
  name: 'Peter',
  printMessage() {
    console.log(`Hello, ${this.name}!`);
  },
};

var printMessage = user.printMessage;
// console.log(printMessage);
printMessage();

/*** task 2 ***/

let name = 'John';

function printName() {
  let name = 'Peter';
  console.log(name);
}
printName();

/*** task 1 ***/
/*** task 1 ***/
/*** task 1 ***/
/*** task 1 ***/
/*** task 1 ***/
/*** task 1 ***/
