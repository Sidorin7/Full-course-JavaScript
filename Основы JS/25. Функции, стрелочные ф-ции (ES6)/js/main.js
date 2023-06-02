"use strict";

let num = 20;

// FUNCTION DECLATATION
// Создаеться до начала выполнения скрипта, можно вызвать перед перед объявление
function showFirstMessage(text) {
  console.log(text);
  console.log(num);
}
showFirstMessage("hello world");
console.log(num);

function calc(a, b) {
  return a + b;
}
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function ret() {
  let num = 50;
  //

  return num;
}

const anotherNum = ret();
console.log(anotherNum);

// FUNCTION EXPRESSION
// Создается только тогда, когда доходит поток кода, можно вызвать только после объявления
const logger = function () {
  console.log("hello");
};
logger();

const calc = (a, b) => {
  console.log("1");
  return a + b;
};
