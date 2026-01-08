// ================================== NESTED SCOPE ======================================================================

function one(){
    const username = "Devansh"

    function two(){
        const website = " youtube"
        console.log(username);
    }
    console.log(website);  // ERROR since website cannot be accessed out of its local scope

    two() // ERROR -: Cannot be executed as accessing out of its local scope
    
}

one()   // ERROR -: Cannot be executed as accessing out of its local scope


// ANOTHER SYNTAX


if(true){
    const username = "Devansh"
    if(username === "Devansh"){
        const website = " youtube"
        console.log(username + website);
    }
    console.log(website); // ERROR -: Cannot be executed as accessing out of its local scope
}

console.log(username); // ERROR -: Cannot be executed as accessing out of its local scope



addone(5) // This will get executed because of the SYNTAX of the function 

function addone(num){
    return num + 1
}


addTwo(5) // This will not get executed after being written down before the function because of the SYNTAX of the function {Detailed explanation in HOISTING}
const addTwo = function(num){
    return num + 2
}
 