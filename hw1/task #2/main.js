const math = require('math');

const testArray = [13234, 324, 4, 3432, 23, 4, 3, 2, 2];
const testNegativeNumber = -4;
const testPositiveNumber = 4;

console.log(`min number of number array: ${math.minNumber.getMinNumber(testArray)}`);
console.log(`summ of number array: ${math.summOfNumbers.getSumm(testArray)}`);
console.log(
    `module of negative test number ${math.moduleOfNumber.getModule(testNegativeNumber)}; 
    module of positive test number ${math.moduleOfNumber.getModule(testPositiveNumber)}; 
    function does work: ${math.moduleOfNumber.getModule(testNegativeNumber) === math.moduleOfNumber.getModule(testPositiveNumber)}.`
);