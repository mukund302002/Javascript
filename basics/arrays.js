// array me shallow copy hota hai i.e agar copy krr rhe hai toh change krne me actual array me bhi changes honge.
const arr = [1,2,3,4,5]
const newarr = new Array(1,2,3,4,4)


arr.push(6)
console.log(arr);
arr.pop()


// array ke starting me ek element daalne ke liye
arr.unshift(-1)
console.log(arr);
arr.shift()
console.log(arr);



arr.includes(9)
arr.indexOf(3)


// slice, splice



//slice me first wala value include hota hai and last wala nahi hota hai and original array me koi change nahi hota hai

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// // splice me first and last dono value include hota hai and also original array mese splice wale elements delete ho jata hai that means original array change ho jata hai.
// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);



const names= ["Mukund", "Himanshu"]
const names1= ["Aviral", "Armaan"]
const names2= ["geetansh", "himanshu"]


// concating arrays
const all_names=names.concat(names1)
console.log(all_names);



// another way of concating the array values is spreading
//here we ahve advantage of concating multiple arrays
//most of the time we use this only in todays work
const all_new_names=[...names, ...names1, ...names2]
console.log(all_new_names);


// flatten all the arrays inside the arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const another_array1= another_array.flat(Infinity)
console.log(another_array1);


// creating array from elements
let score1 = 100
let score2 = 200
let score3 = 300

const my_arr= Array.of(score1, score2, score3)