// creating a promise

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async function 1");
//         resolve()
//     }, 1000)
    
// }).then(function() {
//     console.log("Async 2 resolved");
// })






// const promisethree = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         resolve({username : "mukund", email : "muku@gmail.com"})
//     }, 1000)
    
// })

// promisethree.then(function(user){
//     console.log(user.username);
// })






// const promisefour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username : "mukund", password : "123"} )
//         }
//         else {
//             reject(" error")
//         }
//     }, 1000)
// })

// promisefour.then((user) =>{
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("the promise is either resolved or rejected");
// })








// const promisefive = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username : "mukund",password : "123"} )
//         }
//         else {
//             reject("error occured")
//         }
//     },1000)
// })


// async function consumepromise() {
//     try {
//         const response = await promisefive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }


// consumepromise()






// async function getusers (){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getusers()








fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})