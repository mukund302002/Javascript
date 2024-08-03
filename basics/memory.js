// Stack is a primitive type memory 
// stack me exact value copy hoke jaata hai
// heap is a non-premitive type memory
// heap me memory ka reference jata hai



let name="Mukund"

let anothername= name

anothername= "himanshu"

console.log(name);
console.log(anothername);


let userone = {
    username : "mukund",
    age: 22
}

let usertwo = userone

usertwo.username="himanshu"

console.log(userone.username);