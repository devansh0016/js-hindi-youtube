const name= "Devansh"
const repoCount = 50
 
//console.log(name + repoCount + "Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // This is the new code writing format , to be used this only while writing the code (IMPORTANT)

 const gameName = new String (`devansh-hc`)

 //console.log(gameName[0]);
 //console.log(gameName.__proto__);

 //console.log(gameName.length);
 //console.log(gameName.toUpperCase());
 
 //console.log(gameName.charAt(2));
 //console.log(gameName.indexOf(`t`)); // FOR OUTPUT -: valid indices sirf 0 se (length-1) tak hote hain, -1 invalid index convention hai "not found" ke liye.
 
 const newString = gameName.substring(0,4) // OUTPUT -: As in the output , the last string i.e. (4) index here does not get included in the output . Also if provided any negative value as in indices it does not obey , it starts from 0 in that case if starting index is negative 
 //console.log(newString);
  
 const anotherString = gameName.slice(-8,4)
 //console.log(anotherString);

 const newStringOne = "    devansh   "
 //console.log(newStringOne);
 //console.log(newStringOne.trim()); // The Documentation Link for Trim :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 
 const url = "https://devansh.com/devansh%20dixit"

 console.log(url.replace(`%20`,`-`))

 console.log(url.includes(`sundar`))
 
 console.log(url.includes(`devansh`))

 console.log(gameName.split(`-`)); // The documentation Link for Split -: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split 
 
 
 // NOTE -: Learn about the string methods from the google page through (inspect) option , read about all the string methods through (js mdm) website 
 