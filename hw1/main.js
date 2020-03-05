const minNumber = require('./min');
const summOfNumbers = require('./summ');
const moduleOfNumber = require('./abs');

const testArray = [13234, 324, 4, 3432, 23, 4, 3, 2, 2];
const testNegativeNumber = -4;
const testPositiveNumber = 4;

console.log(`min number of number array: ${minNumber.getMinNumber(testArray)}`);
console.log(`summ of number array: ${summOfNumbers.getSumm(testArray)}`);
console.log(
    `module of negative test number ${moduleOfNumber.getModule(testNegativeNumber)}; 
    module of positive test number ${moduleOfNumber.getModule(testPositiveNumber)}; 
    function does work: ${moduleOfNumber.getModule(testNegativeNumber) === moduleOfNumber.getModule(testPositiveNumber)}.`
);