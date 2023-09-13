function getEvenNumbers(start, end) {
   // Change code below this line
  let evenNumbersArray = [];

for (let i = start; i <= end; i+=1){

  if (i % 2 === 0) {
    evenNumbersArray.push(i)
  }
  return evenNumbersArray;
}
    // Change code above this line
}
  
console.log(getEvenNumbers(3, 11));