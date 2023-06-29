// 1)
// Функция называется showMessage

function showMessage(параметры) {
    // код
}

// 2)
// Функция называется showMessage

let showMessage = function(параметры) {
    // код
}

// 3)
// Функция называется showMessage

let showMessage = (параметры) => {
    // код
}

// 4)
// Создание функции и вызов функции

function printMessage() {
    console.log('Запуск');
}

printMessage();

// 5)
// Функция, принимающая параметры и возвращающая их сумму

function sum(a, b) {
    return a + b;
}

// 6)
// Конвертация функции в функциональное выражение

let sum = function(text = 'text', age = 24) {
    return `${text} ${age}`;
};

// 7)
// Функция, созданная с помощью конструктора, возвращающая сумму параметров

function Sum(a, b) {
    this.a = a;
    this.b = b;
    this.getResult = function() {
        return this.a + this.b;
    };
}

let sum = new Sum(5, 10);
console.log(sum.getResult());

// 8)
// Да, функцию можно вызвать до её объявления в случае, если она была объявлена как function declaration.
// Однако, при использовании function expression или arrow function вызов до объявления вызовет ошибку.

// 9)
// Самовызывающаяся функция, выводящая "Запуск" в консоли

(function() {
    console.log('Запуск');
})();

// 10)
// "arguments" в функциях представляет собой объект-псевдомассив, содержащий все переданные параметры функции.

function sum(text, age) {
    console.log(arguments);
}

sum('text', 24);

// 11)
// Вывод объекта с параметрами из функции

function sum(text, age) {
    console.log({ text, age });
}

sum('text', 24);

// 12)
// Задание значения "some text" параметру text по умолчанию

function sum(text = 'some text', age) {
    // код
}

sum('text', 24);

// 13)
// Вызов функции с тремя параметрами

function sum(text, age, job) {
    // код
}

sum('text', 24, 'developer');

// 14)
// Вызов функции внутри первого объекта с помощью call()

const person = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

const person1 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
};

person.firstFunc.call(person1);

// 15)
// Вызов функции внутри первого объекта с помощью apply()

const person = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

const person1 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
};

person.firstFunc.apply(person1);

// 16)
// Методы call() и apply() могут принять массив параметров.

// 17)
// Для вывода максимально большого числа из списка можно использовать метод Math.max()

console.log(Math.max(1, 2, 3));

// 18)
// Для вывода максимально большого числа из массива можно использовать метод Math.max() в комбинации с apply()

const numbers = [1, 2, 4];
console.log(Math.max.apply(null, numbers));

// 19)
// Для вывода самого маленького числа из списка можно использовать метод Math.min()

console.log(Math.min(1, 2, 3));

// 20)
// Для вывода маленького числа из массива можно использовать метод Math.min() в комбинации с apply()

const numbers = [1, 2, 4];
console.log(Math.min.apply(null, numbers));
