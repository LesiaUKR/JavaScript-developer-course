const calculateTips = bill => (bill < 20 ? bill * 0.2 : bill * 0.15);

const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];

const tips = [];
const totalBills = [];

console.log(bills, tips, totalBills);