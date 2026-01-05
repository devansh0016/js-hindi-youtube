// DATES (IMPORTANT TOPIC) 

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());

//console.log(typeof myDate); // OUTPUT IMPORTANT (Interview Purpose) - It is an Object in JS

//let myCreatedDate = new Date(2025 , 0, 23)

//let myCreatedDate = new Date(2025 , 0, 23, 5, 3) // Months in JS starts with 0(index)

//let myCreatedDate = new Date("2025-01-23") // in (YYYY-MM-DD) format , the month starts from 1(index)
let myCreatedDate = new Date("2025-01-23") // in Indian context this format is used i.e. (MM-DD-YYYY)
//console.log(myCreatedDate.toLocaleString("en-IN")); // (this concept to revise and read again through AI and the lecture itself)

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Date.now()/1000); // IMPORTANT Interview Purpose - Ques-: How to convert the milliseconds output to seconds
//console.log(Math.floor(Date.now()/1000)); // gives a value without decimals , easy to calculate

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // In JS , months starts from 0(index)
console.log(newDate.getMonth() + 1); // (+1) avoids indexing from 0 hence provides the month numbers in standard way
console.log(newDate.getDay()); // gives the output by counting from Monday onwards


`${newDate.getDay()} and the time is` // way of writing the entire date, like in some programs

newDate.toLocaleString("default",{ // IMPORTANT METHOD i.e.(toLocaleString)
    weekday: "long",
})
