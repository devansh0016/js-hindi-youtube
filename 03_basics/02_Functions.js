function calculateCartPrice(val1, val2, ...num1){ // IMPORTANT (Interview)
    return num1
}
 //console.log(calculateCartPrice(200, 400, 500, 2000));
 
 const user = {
    username : "Devansh" ,
    price: 199
 }

 function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
 }
 //handleObject(user)

 handleObject({
    username: "sam",
    price: 399
 })

 const myNewArray =[200, 400, 100, 600]

 function returnSecondValue(getArray){
    return getArray[1]
 }

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000 ]));
 
