/****** SPREAD ******/

/* add the elements of an existing arrau into a new array */

// let cerstToAdd = ['Algorithms and Data Structure', 'Front End Libraries'];
// let certifications = [
//   'Responsive Web Design',
//   ...cerstToAdd,
//   'Data Visualization',
//   'APIs and Microservices',
//   'Quality Assurance and Information Security',
// ];
// console.log(certifications);

/* pass elements of an array as arguments to a function */

// function addThreeNumbers(x, y, z) {
//   console.log(x + y + z);
// }

// let args = [0, 1, 2, 4];

// addThreeNumbers(...args);

/* copy arrays */

// let arr = [1, 2, 3];
// let arr2 = [...arr];//like arr.slice()
// arr2.push(4);
// console.log(arr);
// console.log(arr2);

/* concatenate arrays */

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1.concat(arr2);
console.log(arr1.concat(arr2));
arr1 = [...arr1, 'freeCodeCamp', ...arr2];
console.log(arr1);

/****** REST: condense multiple elements into an array ******/
function multiply(multiplier, ...theArgs) {
  return theArgs.map(element => multiplier * element);
}

let arr = multiply(2, 1, 2, 3);
console.log(arr);

/****** SPREAD EXAMPLE ******/
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};
