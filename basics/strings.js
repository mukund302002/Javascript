let name= "Mukund"
let repocount= 21


// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

console.log(name[0]);
console.log(name.length);
console.log(name.toUpperCase());


// ese declare krne pe suggestions aate hai
const user = new String("Himanshu Kumar")

console.log(user[0]);
console.log(user.length);
console.log(user.toLocaleLowerCase());
console.log(user.charAt(3));
console.log(user.indexOf('H'));


// last value is not counted
const firstname= user.substring(0,8)
console.log(firstname);


// slice can take neg values also
const temp = user.slice(2,5)
console.log(temp);


// trim empty spaces ko remove krr deta hai
const newstring = "    Mukund    "
console.log(newstring.trim());



let anotherstring= "Mukund AGarwalla"
console.log(anotherstring.replace(" ",""));


console.log(anotherstring.includes('Mukund'));


// split krke array bna deta hai based on the splitter given in the argument.
console.log(anotherstring.split(' '));
