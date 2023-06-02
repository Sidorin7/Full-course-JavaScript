'use strict';

const app = '123';

// 1) Использовать онанимную самовызывающию функцию

const number = 1;

(function() {
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

// 2) Объектного интерфейса

const user = (function(){
    const privat =  function() {
        console.log('i am privat !');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();