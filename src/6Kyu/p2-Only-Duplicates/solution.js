/*
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"

*/

function onlyDuplicates(str) {
  let freq=[];
  for(const char of str){
    freq[char] ? freq[char]++ : freq[char]=1;
  }
  return str.split('').filter((letter)=>freq[letter]!==1).join('');
}

// https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript