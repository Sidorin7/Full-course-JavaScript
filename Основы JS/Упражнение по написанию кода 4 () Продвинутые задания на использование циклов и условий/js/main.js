// let arr = [2, 4, 56, 7678, 7];
// let result = [];

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }

// console.log(result);

const arr = [5, 10, "Shopping", 20, "Homework"];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    arr[i] = arr[i];
  } else if (typeof arr[i] === "string") {
    arr[i] = `${arr[i]} - done`;
  }
}
console.log(arr);

const reversedArr = arr.reverse();
console.log(reversedArr);

const arrReverse = [1, 3, 4, 57, 4];
for (let i = arr.length; i >= 0; i--) {
  console.log(arrReverse[i]);
}
