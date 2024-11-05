/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

function moveZeros(arr) {
    let result = [];
    let zero=[];
    for(i=0;i<arr.length;i++){
      if(arr[i]!==0) result.push(arr[i]);
      else zero.push(0);
    }
 
    return result.concat(zero);
  }

// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript