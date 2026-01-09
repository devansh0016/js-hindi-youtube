const user = {
    username : "Devansh",
    price: 999,

    welcomeMessage: function(){
        //console.log(`${this.username} , welcome to website`);
        
    }
}


user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


//console.log(this); // IMPORTANT INTERVIEW :- Browser mein GLOBAL Object Window hota hai


const chai = () => {           // SYNTAX of the ARROW function 
    let username = "Devansh"
    //console.log(this);         // IMPORTANT INTERVIEW -: Read the relation between the Arrow Function and this keyword   
}  

chai()

//const addTwo = (num1, num2) => { // Basic SYNTAX of the Arrow Function
    //return num1 + num2
//}

//console.log(addTwo(3,4));


//const addTwo = (num1, num2) => num1 + num2 // Implicit return statement
//const addTwo = (num1, num2) => (num1 + num2) // Another way of writing -: no need to write return keyword here, just need to wrap the values inside the small brackets()
const addTwo = (num1, num2) => { (username: "Devansh") } // way to return the object using the arrow function
console.log(addTwo(3,4));

