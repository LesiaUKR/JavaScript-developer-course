const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['no-extra-semi', 'no-dup-keys'],
};

/******** Solving variant 1 ********/

// function makeList(arr) {
//   // Змініть код лише під цим рядком
//   const failureItems = [];
//   for (let i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//   }
//   // Змініть код лише над цим рядком

//   return failureItems;
// }

/******** Solving variant 1 ********/

function makeList(arr) {
  // Змініть код лише під цим рядком
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  // Змініть код лише над цим рядком

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);