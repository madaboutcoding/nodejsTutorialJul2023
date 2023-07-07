"use strict"
console.log("Hello World!!!!");
console.log("Use of Let and const in es6");

let number1=100;
console.log("Line 5: number1="+number1);
function incrBy1(number1){
    console.log("Line 7: number1="+number1);
    number1++;
    console.log("Line 9: number1="+number1);
}
incrBy1(number1);
console.log("Line 11: number1="+number1);

for(let i=0;i<11;i++){
    console.log(i);
}

const PI=22/7;
console.log("Constant PI="+PI);
PI=222;
console.log("Constant PI="+PI);