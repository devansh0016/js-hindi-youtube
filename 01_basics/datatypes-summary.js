// PRIMITIVE -> 7 types : String,Number,Boolean,null,undefined,symbol,BigInt

//JavaScript is a dynamically typed language because datatype will automatically assigned at the time of compilation or code execution
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n


// REFERENCE (NON PRIMITIVE) -> Arrays,Objects,Functions

const heros = ["shaktiman","naagraj","doga"];

let myObj = {
 name: "Devansh",
 age: 22,    
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);
console.log(typeof bigNumber); //datatype return - IMPORTANT (interview purpose)
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof myFunction); //datatype return - IMPORTANT (interview purpose)

//NOTE - Need to study all the return types of every datatype , it is very important for the interview purposes
//LINK :- https://262.ecma-international.org/5.1/#sec-11.4.3  


//  ** The return type of every reference or non primitive datatype is FUNCTION but for specifically (Function Datatype) -> return type is Functionn object 




