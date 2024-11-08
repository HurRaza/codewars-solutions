/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(string) {
    let result = '';
    for (let i=0; i<string.length; i++) {
      const char = string[i];
      if (char === char.toUpperCase() && i > 0) {
        result += ' ';
      }
      result += char;
    }  
    return result;
  }

  
// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript