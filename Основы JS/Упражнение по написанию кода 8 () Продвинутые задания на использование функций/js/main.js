"use strict";
// function getTimeFromMinutes(min) {

// }

function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + "ч. " + minutes + "м.";
}

console.log(getTimeFromMins(60));
console.log(getTimeFromMins(122));
console.log(getTimeFromMins(228));
console.log(getTimeFromMins(1337));

function findMaxNumber(num1, num2, num3, num4) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number" ||
    typeof num4 !== "number"
  ) {
    return 0;
  } else {
    return Math.max(num1, num2, num3, num4);
  }
}
console.log(findMaxNumber(1, 5, 8, 2));
