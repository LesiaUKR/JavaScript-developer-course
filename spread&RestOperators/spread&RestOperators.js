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

function addThreeNumbers(x, y, z) {
  console.log(x + y + z);
}

let args = [0, 1, 2, 4];

addThreeNumbers(...args);

/* copy arrays */
let arr = [1, 2, 3];
let arr2 = [...arr];
arr2.push(4);
console.log(arr);
console.log(arr2);

/* concatenate arrays */

/****** REST: condense multiple elements into an array ******/
