// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Devansh",
    "full name" : "Devansh Dixit",
    [mySym]: "mykey1", // Correct syntax to declare the symbol , ( [] -> is used to refer to a symbol )
    age: 18,
    location: "lucknow",
    email: "devansh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

//console.log(JsUser.email) // primary way of accessing an Object (using, .)
//console.log(JsUser["email"]) // other way of accessing an Object (using, []) IMPORTANT INTERVIEW
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.email = "devansh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "devansh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //(this.) using string interpolation i.e. `` ,can be used to access anything specifically from the declared object 
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
 
