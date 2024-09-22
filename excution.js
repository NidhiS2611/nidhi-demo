//imediately invoked function expression (IIFE)
(function show(){
    console.log("db conection");
    
})()
// two iffee is wirtten when we apply semicolon in first iffe.
//(function () {
    // …
//  })();
  
//  (() => {
    // …
 // })();
  
//  (async () => {
    // …
//  })();
//********************************************************************************* */
//how does code execute +call stack
// parser- it is program thats read your code and understands the code
// js engine-it is a program jo leta hai js code ko aur usko binary foramt mai compile karta hai
// dveloped by web browser vendors chrome - v8 -engine ,firefox - spider monkey
//ec - when js is start js engine creates ec environment.

//java script execution context
// sabse pehle global ec banta hai phr usko this mai rakh dete hai
//funstional excution context
//eval execution context
//phases of ec 
//1 memory creation phase
//2 excution phase
//step 1= global ec it refers to this
//step 2= memory phase mai sare varable ko rakha jata hai and value hoti hai undefined
//step 3 excution phase excute the code from top to bottom
// when function is excute it create new emnvironment
// again memory phase 
//deletion after excution
//   call stack 
// it follows lifo and store excution context
//****************************************** */
                //loop 
// forof loop
//for(var iterator of element)