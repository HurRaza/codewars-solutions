/*

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/


function generateHashtag(str) {
    let words = str.trim().split(" ").filter(word => word !== "");
    
    if (words.length === 0) return false;
  
    let res = "#" + words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
  
    if (res.length > 140) return false;
  
    return res;
  }

  
// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript