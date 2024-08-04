// immediately invoked function

// agar function ka immediate execution krna hai toh iife use krte hai hum
(function temp() {
    console.log("database connected");
})();
// pure function ko () ke andr wrap krdo and fir end me same line me () daal do toh ho jayega
// last wala () is for execution of that function immediately
// semi colon is important for stopping of the function


// another way to decallre this and paas some parameters 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('mukund')