console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // reason - equality check (==) and comparisons >,<,>=,<= works differently 
                        // comparisions convert null to a number, treating it as 0
                        // That's why (3) null >=0 is true and (1) null > 0 is false
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// need to avoid the above type of comparisions as they make the code readability tough 


// === -> represents the strict equality operator, which compares both the value and data type of two operands, returning true only if they match exactly — no type conversion occurs.
​

console.log("2" === 2);


