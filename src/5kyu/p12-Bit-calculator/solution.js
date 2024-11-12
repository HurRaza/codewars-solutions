/*
In this kata your task is to create bit calculator. Function arguments are two bit representation of numbers ("101","1","10"...), and you must return their sum in decimal representation.

Test.expect(calculate("10","10") == 4);
Test.expect(calculate("10","0") == 2);
Test.expect(calculate("101","10") == 7);
parseInt and some Math functions are disabled.

Those Math functions are enabled: pow,round,random


*/


function calculate(num1,num2){
    let bin1 = '0b'+num1;
    let bin2 = '0b'+num2;
    return Number(bin1) + Number(bin2);
  }

  
// https://www.codewars.com/kata/52ece9de44751a64dc0001d9/train/javascript