const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(convert(500, usdCurr)); // или так
promotion(res); // или через промежуточную переменную

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return;
  }
  console.log("done");
}
test();

function doNathing() {}
console.log(doNathing() === undefined);

// Вопрос на СОБЕСЕ: Фунция, которая не содержит return всегда выводит в консоль undefined
