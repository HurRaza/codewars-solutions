/*
This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!

Usage of BigInt is disallowed and will be checked in the full test suite.
*/

function multiply(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    let result = new Array(num1.length + num2.length).fill(0);

    let num1Rev = num1.split('').reverse();
    let num2Rev = num2.split('').reverse();

    for (let i = 0; i < num1Rev.length; i++) {
        for (let j = 0; j < num2Rev.length; j++) {
            let product = (num1Rev[i]) * (num2Rev[j]);
            let sum = result[i + j] + product;
            result[i + j] = sum % 10;    
            result[i + j + 1] += Math.floor(sum / 10);
        }
    }
    let resultStr = result.reverse().join('').replace(/^0+/, '');
    return resultStr;
}

// https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript