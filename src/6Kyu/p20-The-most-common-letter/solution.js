/*
Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'

*/

function replaceCommon(string, letter) {
    let freq = {};
    for(let char of string){
      if(char!==" "){
        freq[char] ? freq[char]++ : freq[char]=1;
      }
    }
    
    let maxChar = '';
    let maxCount = 0;
    for (let char of string) {
      if (char !== ' ' && freq[char] > maxCount) {
        maxCount = freq[char];
        maxChar = char;
      }
    }
    
    return string.split('').map(char=> char==maxChar ? char=letter : char).join(''); 
  }


// https://www.codewars.com/kata/5a434a9dc5e284724f000011/train/javascript