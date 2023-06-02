'use strict';

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function () {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     }

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110){
//             userAge = age
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }

// }

// const ivan = new User('Ivan', 27)
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

// ivan.say();

// Пробуем на классах

class User {
    contstructor(name, age ) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Sidorin'

    say = () => {
        console.log(`Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110){
            this._age = age
        } else {
            console.log('Недопустимое значение');
        }
    }

}

const ivan = new User('Ivan', 27)
console.log(ivan.surname);
ivan.say();


// дз

class UserTwo {
    constructor(jobTitle, salary){
        this.jobTitle = jobTitle;
        this.salary = salary;
    }
    say = () =>{
        console.log(`Должность:${this.jobTitle}, зп: ${this.salary}`);
    }

    #salary = 350123
    get salary() {
        return this.#salary;
    }

    set salary(salary){
        if (typeof this.salary === 'number' && this.salary > 0){
            this.#salary = salary;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const sem = new UserTwo('Sem', 31)
sem.salary = 356000;
console.log(sem.salary);

