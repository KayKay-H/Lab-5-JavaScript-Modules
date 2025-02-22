import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';


const numbers = [1, 2, 3, 10, 5];
const maxNumber = findMax(numbers);
const multipliedResult = multiply(maxNumber, 2);

console.log('Add: ' + add(5, 3));
console.log('Subtract: ' + subtract(5, 3));
console.log('Multiply: ' + multiply(4, 5));
console.log('UpperCase: ' + toUpperCase('hello'));
console.log('LowerCase: ' + toLowerCase('HELLO'));
console.log('Find Max: ' + findMax([1, 2, 3, 4, 5]));
console.log('Reverse Array: ' + reverseArray([1, 2, 3, 4, 5]));
console.log('Add and Log Upper: ' + addAndLogUpper(10, 20));
console.log(toUpperCase(multipliedResult.toString()));

import { addAndLogUpper } from './mathModule.js';

addAndLogUpper(10, 20);