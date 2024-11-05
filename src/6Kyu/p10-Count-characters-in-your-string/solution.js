/*
The main idea is to count all the occurring characters in a string. If you have a string 
like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
    let freq={};
    for(const char of string){
      freq[char] ? freq[char]++ : freq[char]=1;
    }
    return freq;
  }

// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript