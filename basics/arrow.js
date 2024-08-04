const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// this keyword functions me kaam nahi krta, it works only in objects only


// ARROW FUNCTIONS

const temp = () => {
    console.log("This is an arrow function");
}

temp()


const addnums= (num1, num2) => {
    console.log(num1+num2);
    return num1+num2
}
 
addnums(3,4)


//ye react me kaam aayega
// agar curly braces use kiya hai toh return statement likhna padega
// if only paranthesis use kiya hai toh no need of return statement directly jo return krna hai vo krdo

// both are correct
const addtwo = (num1, num2) => (num1+ num2)
const add = (num1, num2) => num1 + num2

// if object return krna hoi toh ese hi krna padgea
const adds = (bum1, num2 ) => ({username: "mukund"})
