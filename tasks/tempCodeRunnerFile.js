function rangeOfNumbers(startNum, endNum) {

   const numbers = [];

  if (endNum < startNum) {
    return [];
  } else {
     const numbers = rangeOfNumbers(startNum, endNum-1);
   numbers.push(endNum);
    return numbers;
   }
};

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));