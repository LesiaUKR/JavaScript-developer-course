const getAverage = (month1, month2, month3) => (month1 + month2 + month3) / 3;

const dept1AverSales = getAverage(85467, 89842, 38501);
console.log(dept1AverSales);

const dept2AverSales = getAverage(70533, 50121, 33899);
console.log(dept2AverSales);

function printBonus(dept1AverSales, dept2AverSales) {
  let message = '';
  if (dept1AverSales > dept2AverSales) {
    const delta = dept1AverSales - dept2AverSales;
    const deltaInPercentage = (delta / dept2AverSales) * 100;
    console.log("deltaInPercentage", deltaInPercentage);
    if (deltaInPercentage >= 30) {
      message = `Dept 1 will get a bonus of ${deltaInPercentage}%`;
      return message;
    } else {
      message = `No bonus for Dept 1`;
      return message;
    }
  } else if (dept2AverSales > dept1AverSales) {
    const delta = dept2AverSales - dept1AverSales;
    const deltaInPercentage = (delta / dept1AverSales) * 100;
    if (deltaInPercentage >= 30) {
      message = `Dept 2 will get a bonus of ${deltaInPercentage}%`;
      return message;
    } else {
      message = `No bonus for Dept 2`;
      return message;
    }
  } else {
    message = `No bonus for any department in this quarter`;
  }
  return message;
}

console.log("printBonus", printBonus(dept1AverSales, dept2AverSales))

// коротша версія функції printBonus
const printBonus1 = function (dept1AverSales, dept2AverSales) {
   if (dept1AverSales > dept2AverSales && dept1AverSales >= 1.3 * dept2AverSales) {
      const diff = dept1AverSales - dept2AverSales;
      const percent = diff / dept2AverSales * 100;
      console.log("percent", percent);
      console.log(`Dept 1 will get a bonus of ${percent}%`);

   } else if (dept2AverSales > dept1AverSales && dept2AverSales >= 1.3 * dept1AverSales) {
      const diff = dept2AverSales - dept1AverSales;
      const percent = diff / dept1AverSales * 100;

      console.log(`Dept 2 will get a bonus of ${percent}%`);

   } else {
      console.log('No bonus for any department in this quarter');
   }
}

printBonus1(dept1AverSales, dept2AverSales);
