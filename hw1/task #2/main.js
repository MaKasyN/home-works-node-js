const math = require('math');

const testArray = [13234, 324, 4, 3432, 23, 4, 3, 2, 2];
const testNegativeNumber = -4;
const testPositiveNumber = 4;

console.log(`min number of number array: ${math.minNumber(testArray)}`);
console.log(`summ of number array: ${math.summOfNumbers(testArray)}`);
console.log(
    `module of negative test number ${math.moduleOfNumber(testNegativeNumber)}; 
    module of positive test number ${math.moduleOfNumber(testPositiveNumber)}; 
    function does work: ${math.moduleOfNumber(testNegativeNumber) === math.moduleOfNumber(testPositiveNumber)}.`
);