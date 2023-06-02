function sayHello(name) {
  return `Привет ${name}`;
}
console.log(sayHello("Антон"));

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}
console.log(returnNeighboringNumbers(7));

function getMathResult(num, prog) {
  if (typeof prog !== "number" || prog <= 0) {
    return num;
  }
  let str = "";
  for (let i = 1; i < prog; i++) {
    if (i === prog) {
      str += `${num + i}`;
      // Тут без черточек в конце
    } else {
      str += `${num * i}---`;
      // Это тоже самое, что и
      // str = str + num * i + "---"
    }
  }
  return str;
}
console.log(getMathResult(3, 10));
