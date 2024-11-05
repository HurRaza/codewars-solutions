/*
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"

*/

function getMiddle(s) {
    let middle = s.length;
    return s.length%2==0 ? s.slice(middle-1,middle+1) : s.slice(middle,middle+1);
}

// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
