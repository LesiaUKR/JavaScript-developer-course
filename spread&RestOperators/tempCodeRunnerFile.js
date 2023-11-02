function multiply(multiplier, ...theArgs) {
  return theArgs.map(element => multiplier * element);
}

let arr = multiply(2, 1, 2, 3);
console.log(arr);