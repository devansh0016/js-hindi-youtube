//const tinderUser = new Object() //Singleton Object (IMPORTANT)
const tinderUser = {} // Non - Singleton Object    (IMPORTANT) 


tinderUser.id = "123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "devansh@google.com",
    fullname: {
        userfullname: {
            firstname: "devansh",
            lastname:"dixit"
        }
    }
} 

//console.log(regularUser.fullname.userfullname.firstname);

const Object1 = {1: "a" , 2: "b"}
const Object2 = {3: "a" , 4: "b"}
const Object4 = {5: "a" , 6: "b"} 

//const Object3 = { Object1 , Object2}
//const Object3 = Object.assign({}, Object1,Object2,Object4) // here {} -> acts as a target object , making it easy/neat way to assign source objects // Documentation :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign 

const Object3 = {...Object1, ...Object2} // Best/Latest way to merge objects (using Spread Operator (...)) , mostly used way in the production as well

//console.log(Object3);

const users = [
    {
        id:1,
        email: "devansh@gmail.com"
    },
    { 
    },
    { 
    },
    { 
    },
]

users[1].email    // Syntax (IMPORTANT)  // for printing any value from the array or looping through the array
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // (hasOwnProperty) is an important Method of the Object, mainly used to avoid crashing in the production
console.log(tinderUser.hasOwnProperty("isLogged"));   // to read more about the different Methods of the Object from the inspect page in console option by mentioning any object from the file


