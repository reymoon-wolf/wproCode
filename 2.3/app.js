/* Конспект

// Number - числа
// BigInt - большие и сложные числа
// String - строки
// Boolean - логическое значение, либо true либо false
// undefined - отсутствие тех или иных значений у переменой
// null - когда нужно специально указать переменной, что у нее нет значений
// Symbol - используется для создания уникальных ключей свойств объектов и предотвращения коллизий имён
// Object - коллекция свойств и методов, связанных друг с другом


const age = 27; // number - числа
console.log(typeof age);

const BigInt = 5156116516156n; // BigInt - большие и сложные числа
console.log(typeof BigInt);

const firstName = 'Name'; // String - строки
console.log(typeof firstName);

let age2; // undefined - отсутствие тех или иных значений у переменой
console.log(typeof age2);

// Object - коллекция свойств и методов, связанных друг с другом
const obj = {
    name: 'Andrew',
    age: 32,
    isWorked: true

}


const num = 10
const num2 = 5

console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num / num2);
console.log(num % num2);
*/

// Домашнее задание 2.3

const titleProject = 'Рассчет стоимости';
const screensValue = {
    Value1: 'шаблонные',
    Value2: 'с уникальным дизайном',
    Value3: 'с анимациями'
}
const screensPrice = 100;
const percentage = 15;
const fullPrice = 1500;
const responsive = true;

console.log(titleProject);
console.log(screensValue);
console.log(screensPrice);
console.log(percentage);
console.log(fullPrice);
console.log(responsive);
