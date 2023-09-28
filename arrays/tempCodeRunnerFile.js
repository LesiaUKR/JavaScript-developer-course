function getCommonElements(array1, array2) {
  // Change code below this line
  const identicalElementsArray = [];

  for (const element of array1) {
    if (array2.includes(element)) {
      identicalElementsArray.push(element);
    }
    console.log(element);
  }
  return identicalElementsArray;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));