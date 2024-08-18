// Don't Repeat Yourself DRY - говорить про те, що потрібно використовувати функції для уникнення повторення коду

function printText() {
   console.log('Hello to everyone!');
}

printText();
printText();
printText();


const number = Number('79');
console.log(number);



function colorizer(item, color, colorCode) {
   // console.log(item, color);
   const colorizedItem = `The ${item} is ${color}. The code of the color is ${colorCode}.`;
   // console.log(colorizedItem);
   return colorizedItem;
}

// присвоюємо результат виклику функції змінній
const messageFromColorizer = colorizer('desk', 'red', 99);
console.log(`We have the following message: ${messageFromColorizer}`);

const messageFromColorizer2 =
   colorizer('hand', 'green', 10);
console.log(`We have the following message: ${messageFromColorizer2}`);