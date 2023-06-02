function factorial(n) {
    if (!Number.isInteger(n) || typeof(n) !== 'number') {
        return 'Недопустимиое значение';
    }

    if(n >= 1){
        return n * factorial(n - 1);
    } else {
        return 1
    }
    
}

// Более короткий вариант, который вы можете встретить
// Но не учитывает отрицательные значения

// return n ? n * factorial(n - 1) : 1;

console.log(factorial(2));


// function sumTo(n) {
//     let sum = 0;
//         for (let i = 1; i <= n; i++) {
//             sum += 1
            
//         }
//         return sum    
// }
// console.log(sumTo(2));

function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);        
}

console.log(sumTo(100));


// Числа Фибоначчи

function fib(n) {
    return n<= 1 ? n : fib (n - 1) + fib(n - 2);
}
console.log(fib(3));


// Вывод односвязного списка

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
  
    alert(list.value); // выводим текущий элемент
  
    if (list.next) {
      printList(list.next); // делаем то же самое для остальной части списка
    }
  
  }
  
  printList(list);