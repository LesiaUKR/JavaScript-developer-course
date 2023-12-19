const data1 = [49, 51, 63];
const data2 = [31, 29, 43, 58, 52];

const printHumiditiesForecast = function (arr) {
  // let str = '... ';
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}% in ${i + 1} days ... `;
  }

  console.log('... ' + str);
};

printHumiditiesForecast(data1);
printHumiditiesForecast(data2);