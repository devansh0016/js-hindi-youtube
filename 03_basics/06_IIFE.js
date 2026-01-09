//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log("DB CONNECTED");
}); // this ; is very important when declaring/writing two IIFEs , as it represents line end of one IIFE

//()() // Use of IIFE -: Global scope ke pollution sey problem hoti h kai baar , so jo kuch bhi declaration hai wahan global scope mein usko hatane ke liye IIFE ka use krte hai
    // First () -> It is for wraping up inside the small brackets 
    // Second () -> It is for the execution  

    ( (name) => {
        console.log("DB CONNECTED TWO ${name}");
    } ) ("Devnash")