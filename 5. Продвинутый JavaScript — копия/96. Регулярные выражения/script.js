'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('введите число');
// const reg = /\d/g;
// console.log(ans.match(reg)); // если n есть в строке - true
// console.log(reg.test(ans)); // если n есть в строке - true

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));

// \D - НЕ ЧИСЛО
// \W - НЕ БУКВЫ


// \d - ищим цифры
// \w - ищим все буквы
// \s - ищим все пробелы
// i
// gdfd
// m

// console.log(ans.search(reg)); // нашли опеределенныю букву
// console.log(ans.match(reg)); // получаем массив (строка , индекс ...)

// const pass = prompt('Password')
// console.log(pass.replace(/./g, "*"));// заменяем все символы пароля на звездочку

// console.log('12-34-56'.replace(/-/g, ':'));// меняем дефисы на двоеточия (полезно например в часах)

