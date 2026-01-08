function sayMyName(){   // SYNTAX of a function 
    //console.log("D");   //  sayMyName -> This is the reference 
    //console.log("E");   //  () -> execution 
    //console.log("V");      
}

//sayMyName() // way to call a function 

function addTwoNumbers(number1, number2){ // NOTE -: no need to provide the type in JS
console.log(number1 + number2);
}

//addTwoNumbers(3,4)    // need to provide the numbers here, to get the execution/output 
//addTwoNumbers(3,"4") // here JS recognises both the values as strings only since one of the value is provided as such
//addTwoNumbers(3,"a")
addTwoNumbers(3,null)

// PARAMETERS -: When we pass the values while defining the function then the passed values are called Parameters
// ARGUMENTS -: When we pass the values while calling the function then the passed values are called arguments

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
    return number1 + number2 // another way of using returning the values without declaring a new variable
    console.log(result); // nothing gets executed after "return" , hence this won't get executed  
    
}    

const result = addTwoNumbers (3,5)

//console.log( "Result: " , result);


function loginUserMessage(username){  // Need to revise from the lecture (IMPORTANT)
    return `${username} just logged in`
}

console.log(loginUserMessage("Devansh"));
console.log(loginUserMessage()); // IMPORTANT :- When printed nothing from the function , output comes out as UNDEFINED

