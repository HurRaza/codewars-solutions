/*
contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

*/

function evenNumbers(array, number) {
    return array.filter((num)=>num%2==0).slice(-number);
  }

// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript
