function sayMyName(){
    console.log("M");
    console.log("U");
    console.log("K");
    console.log("U");
    console.log("N");
    console.log("D");
}

// sayMyName mtlb hua reference
// and sayMyName() hua execution
sayMyName()


// agar function calling ke time user ke kuch argumrnt pass nahi kiye toh hum function declaration ke time default value de skte hai jese yaha sam diya hai
// but agar dono jagah kuch na kuch diya hua hai toh calliing ke time wala valid hoga declaration wala nahi hoga.
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("mukund"))




// shopping cart me ye idea nahi hota ki kitne objects aayenge add krne ke liye toh yaha rest operator use krte hai
// ... operator saare values ko ek array me daal deta hai.
function cartcalculator(...num1){
    return num1
}
// 
console.log(cartcalculator(2,3,4,56,1));




const user = {
    username: "hitesh",
    prices: 199
}
// getting the objects in the functions
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


// getting the arrays in the functions
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));