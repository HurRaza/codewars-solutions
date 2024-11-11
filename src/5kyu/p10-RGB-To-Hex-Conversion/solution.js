/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"

*/

const Hex = (n)=>{
    if (n<0) n = 0; 
    if(n>255) n = 255; 
    const hex = n.toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
}  
function rgb(r, g, b) {
      return Hex(r) + Hex(g) + Hex(b)
}


// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript