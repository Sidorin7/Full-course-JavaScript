"use strict";
function calculateVolumeAndArea(edgeLength) {
  if (
    typeof edgeLength !== "number" ||
    edgeLength < 0 ||
    !Number.isInteger(edgeLength)
  ) {
    alert("При вычислении произошла ошибка");
  }
  let cubeVolume = edgeLength ** 3;
  let cubeArea = 6 * edgeLength ** 2;

  return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
}
// console.log(calculateVolumeAndArea("10"));

function getCoupeNumber(seatNumber) {
  if (typeof seatNumber !== "number" || !Number.isInteger(seatNumber)) {
    alert("Ошибка. Проверьте правильность введенного номера места");
  }
  if (seatNumber === 0 || seatNumber === 36) {
    alert("Таких мест в вагоне не существует");
  }
  return Math.ceil(seatNumber / 4); // округление вверх. Округляет аргумент до ближайшего большего целого.
}
console.log(getCoupeNumber(9));
