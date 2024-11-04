/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/

function toCamelCase(str){
    let words = str.split(/[-_]/);
    for(i=1;i<words.length;i++){
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    return words.join('');
  }


// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript