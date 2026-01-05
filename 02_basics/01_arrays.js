// ARRAYS 

const myArr = [0,1,2,3,4,5]  // Link to read about it -: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
// Important (Interview) -: JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// Important (Interview) Link to read about shallow and deep copy -: https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
                                            // https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
//console.log(myArr[0]); 

const myHeros = ["Shaktiman","nagraj"]

const myArr2 = new Array(1, 2, 3, 4) // New way of declaring Arrays
//console.log(myArr[1]);

// ARRAY METHODS 

myArr.push(6) // PUSH -: inserts the argument provided at the last of the array
myArr.push(7)
myArr.pop() // POP -: does not take any argument and removes the last element of the array

myArr.unshift(9) // UNSHIFT -: inserts the element at the start of the array
myArr.shift() // SHIFT -: No argument to be provided , removes the first element and returns it
//console.log(myArr);

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

const newArr = myArr.join() // to read about JOIN , just hover over the term here(VSCODE) only

//console.log(myArr);
//console.log(newArr);
//console.log(typeof newArr); // IMPORTANT (Interview purpose)


// SLICE , SPLICE -:

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ",myArr);
const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

// SLICE and SPLICE -: Array manipulation happens in splice while not in slice operation (IMPORTANT INTERVIEW PURPOSE) 
// (IMPORTANT) Link to read about both -:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice 
                            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice



