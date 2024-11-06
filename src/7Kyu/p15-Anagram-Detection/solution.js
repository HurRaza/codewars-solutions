/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

// write the function isAnagram
var isAnagram = function(test, original) {
    if(test.length !== original.length) return false;
    let str1 = test.toLowerCase().split('').sort().join('');
    let str2 = original.toLowerCase().split('').sort().join('');
    return str1 === str2;
  };

  
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript