// STACK MEMORY -> Primitive value --> we get the copy of original , means the changes if any, are made to the copied value
// HEAP MEMORY -> Non-Primitive value --> we get the reference , means the changes if any,are made to the original value

//--------------------------EXAMPLES-------------------------------------------------------------------------------------------

let myYoutubename = "devanshdixitdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Devansh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


