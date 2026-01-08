let a = 300      // GLOBAL SCOPE
var c  = 300
if (true) {     // LOCAL SCOPE ,memory is allocated within the braces {} only
let a = 10
const b = 20
var c = 30
console.log("INNER ", a); // values that are to be taken as an output should be printed within the braces{} only

}

console.log(a);
console.log(b);
console.log(c);


