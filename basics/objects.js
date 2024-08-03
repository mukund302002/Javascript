// OBJECT LITERALS
// non-singleton
const user ={
    name : "Mukund",
    "full name" : "Mukund Agarwalla",
    age : 22,
    location : "Nagpur",
    isloggedIn : false
}
// yaha pe key jo hai vo strings ke form me hota hai but dikhta nahi hai


// accessing the object keys
console.log(user.name);
// agar keys string me hideclare kiya hai ytoh ese hi krna pdega access
console.log(user["full name"]);


// freeze krne ke baad object ke values change nahi hota
user.age= 23
// Object.freeze(user)
user.age=24
// console.log(user);



// koi key add krna ho toh
user.height= 180
console.log(user);

user.greeting= function(){
    console.log("hello user");
}

// this key word krte hai current object ko refer krne ke liye
user.greeting2= function(){
    console.log(`hello my name is ${this.name}`);
}
console.log(user.greeting2());





// SINGLETON
// jab ese declare krte hai toh singleton declare hota hai
const new_user = new Object()

new_user.id="123"
new_user.name="Mukund"
new_user.isloggedIn=false


// objects inside object

const user2={
    name: "Mukund",
    fullname : {
        first_name : "Mukund",
        middle_name : "Anil",
        last_name : "Agarwalla",
        sex : {
            male: true,
            female: false
        }
    }
}

console.log(user2.fullname.first_name);


//combining multiple objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//spread operator
const obj3= {...obj1, ...obj2, ...obj4}
console.log(obj3);



// getting the keys and values of a particular object
console.log(Object.keys(user));
console.log(Object.values(user));
// this return a array of the keys and the values


const course = {
    coursename : "NLP",
    faculty : "Amol sir"
}
// destructuring
// this is an easy way to access the objects as dot operator ka baar baar use nahi krna pad rha hai
const {faculty} = course
console.log(faculty);

// another way to write this 
const {faculty: teacher} = course
console.log(teacher);




