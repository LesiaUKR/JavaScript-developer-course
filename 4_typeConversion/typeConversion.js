/*********  Conversion to String *********/ 

// let x = String(111);
// x = String(2 + 2);
// x = String(true);
// x = String(new Date());
// x = String(['one', 'two', 'three']);

/*********  method toString() *********/ 

// x = (35).toString();
// x = (true).toString();

// console.log(x);
// console.log(typeof x);
// console.log(x.length);

/********* Conversion to Number *********/ 

/********* Number() *********/ 

// let y = 5.1234567;
// y = Number(false);
// y = Number(null);
// y = Number('text');
// y = Number([1, 2, 3, 4]);

/********* parseInt() *********/ 

// y = parseInt('123.798')

/********* parseFloat() *********/ 

// y = parseFloat('123.798')
// console.log(y);
// console.log(typeof y);
// console.log(y.toPrecision(7));

/********* Неявне перетворення типів - Implicit type conversion *********/ 

/*** Знак + плюс ***/

// const x = 5;
// const y = '3';
// const z = x + y; // буде 53, бо пройшла конкатинація через неявне перетворення типів при додаванні числа і рядка

/*** Знак - мінус, / поділити, * помножити ***/

const x = '5';
const y = '3';
const z = x - y; // буде 2, бо пройшло  неявне перетворення типів при - | / | * і рядки при відніманні, діленні, множенні перетворилися в числа

console.log(z);
console.log(typeof z);
