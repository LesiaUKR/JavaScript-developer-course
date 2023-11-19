// Змініть код лише під цим рядком
class Thermostat {
  constructor(fahrenheitTemp) {
    this.fahrenheitTemp = fahrenheitTemp;
  }

  get temperature() {
    return (5 / 9) * (this.fahrenheitTemp - 32);
  }
  set temperature(celsiusTemp) {
    return (this.fahrenheitTemp = (celsiusTemp * 9.0) / 5 + 32);
  }
}

// Змініть код лише над цим рядком

const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
console.log(thermos);
let temp = thermos.temperature; // 24.44 градусів за Цельсієм
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 градусів за Цельсієм
console.log(temp);