// way to explicitly define a number
const balance = new Number(100)


// shows the decimal upto given points
console.log(balance.toFixed(2));



// apply the commas to the given number
const humdereds = 1000000000
console.log(humdereds.toLocaleString('en-IN'));


// MATHS
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));



// MATH.RANDOM

console.log(Math.random());

// i want to generate a number between a given range
let max= 20
let min =10

console.log(Math.floor(Math.random()*(max - min + 1)) + min);