const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 23.8966

//console.log(otherNumber.toPrecision(4));
//console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
//console.log(hundreds.toLocaleString(`en-IN`));

//++++++++++++++++++++++++++++++ MATHS (Library in JS)+++++++++++++++++++++++++++++++++++++++++++++++++++

//console.log(Math) // to read more from the main google page (inspect->console->math->different options/methods/functions to learn)

//console.log(Math.abs(-4));
//console.log(Math.abs(4));

//console.log(Math.round(4.6));//IMPORTANT FUNCTION
//console.log(Math.ceil(4.2));
//console.log(Math.floor(4.9));
//console.log(Math.min(4, 3, 6, 9));
//console.log(Math.max(4, 3, 6, 9));


console.log(Math.random());
console.log(Math.random());

console.log((Math.random()*10) + 1); // (+1) guarantees non zero or very near zero value , (*10) multiples the random value by 10 b/w 0-1 provided by random function , helpful in instances like making games at production level 
console.log(Math.floor((Math.random()*10) + 1)); // gives the nearest least integer (floor) value of the above command

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // **IMP LINE OF CODE //IMPORTANT - (max - min) -> gives the value in b/w the range of max and min , (+1) -> avoids the zero case as (floor) function can lead to an output value of 0 as a case , (+ min) -> lastly this gives a value more than the minimun value mentioned/assigned initially in the range  

// NOTE - Important to revise the last explained summary of random function to last line of code in the lecture , revision to be from the lecture itself (HITESH SIR , JS PLAYLIST, Nums and Maths)