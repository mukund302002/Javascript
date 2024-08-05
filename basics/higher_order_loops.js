// for of loop

const arr= [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}



// map me humesha unique values honge.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// simply map print krte hai toh array ke form me hota hai
// console.log(map);


// vo array ka breakdown iss syntax se krr skte hai.
for (const [key, value] of map) {
    console.log(key, ':-', value);
}



// for of loop me values aata hai 
// for in loop me keys aata hai foi usko "object[key]" se access krna padta hai





// objects ko traverse krne ke liye for in loop use krte hai
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }






// FOR EACH LOOP GENERALLY USED FOR ARRAYS

const coding = ["javas", "rb", "py", "java", "cpp"]

coding.forEach( function(val) {
    console.log(val);
} )



// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )