
//NUMBER CONVERSION

let score = "33"

console.log(typeof score);

let numbervalue = Number(score)
// method for converting to number

console.log(numbervalue);
console.log(typeof numbervalue);


// isko number me convert krenge toh NaN aayega joki wapis ek number hi hai
let value = "33abc"

// number convertion
// null -> 0
// undefined -> NaN
// true -> 1
// string ("mukund") -> NaN


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isvalue = Number(value)
console.log(isvalue);
console.log(typeof isvalue);





// BOOLEAN CONVERSION

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true




// STRING CONVERSION
let number= 33

let numbertostring= String(number)
console.log(typeof numbertostring);
console.log(numbertostring);