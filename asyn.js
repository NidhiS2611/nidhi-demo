// synchrounous javascript
// excute in sequence one by  one run after previous comletion
// single threaded
// it block the code when we fetch the some file from api
//console.log("hu");
//console.log("hi");


// asynchronous javascript
// isme ek sath code chlta hai jiska result milta jata hai usko le lete hai
// it does not block the code
// it allow to run aage ka code 
// it create alg thread async code to browser
//isme hmm dosre instruction compelete hone ka wait nhi karte aur aage badte hai
//console.log("hello");
//setTimeout(() => {
//console.log("jhi");

//},3000)
//console.log("nidhi");
//console.log("shakya");

// callback
// aisa fuction jo dosre function mai AS A argument pass ho
function sum(a, b) {
  // console.log(a+b);

}
function evaluate(a, b, sum) {
  sum(a, b);
}
evaluate(6, 7, sum)
function hello() {
  // console.log("nidhi");

}
setTimeout(hello, 3000)
//console.log("helllo");
// callback hell
// nested callbacks aa jati hai jo problem karti hai bhot 
// promise8888888888888888888888888888888888888888888888888888888888888888888888888888888
// it is an object 
// it overcome the problem of callbacks hell 
// it has two handlers jo automaticallly kam karte hai 
// it has three state 
// pending ,fullfilled,reject>
// resolve jb call hota hai jb kam ho jata hai aur ek messge return karta hai 
// then ye direct connect hota hai resolve se ye resovle  se dta leta hai aur use handle karta hai ya print resolve ke according kam karta hai
// eg movie =tickets
// reject ye jb call hota haijb fail ho jaye operation ye  ek error maessge return karta hai
// catch usk merror messge ko handle kart hai aur print karta hai

// sabse pehle jb koi promise banta hai vo pending state mai hota hai 
// jab kam complte ho jata haio tb vo resolve ko call karta hai aur fullfilled state mai pahuch jata hai
// end uske bad then  usko handle karta hai
//let promise1 = new Promise((resolve, reject) => {// promise creation
//setTimeout(() => {
  // console.log("nidhi");
  // resolve("succesfy-ul") // fullfilled state mai jana
//}, 2000)
//}).then((val) => {  // messge print karna
// console.log(val);

//})
//console.log("hello");
//*********************88888888888888888888888888888888888 */
// promises chaining

let p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
   // console.log("hi");
    resolve("hello");
    
  },3000)
  
  
}).then((val)=>{
 // console.log(val);
  let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
     // console.log("hi");
      resolve("hello")
      
      
    }, 3000);
  })
  return p2;
}).then((val)=>{
 // console.log(val);
  
})


//****************88888888888888888888888888888 */
// async await
//it is use to show async code like sync code
// it returs a promise

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
 // console.log('calling');
  //const result1 = await resolveAfter2Seconds();
 // console.log(result1);
  //const result2 = await resolveAfter2Seconds();
 // console.log(result2);
  
  // Expected output: "resolved"
}

asyncCall();


/// fetch api
//   fetch ek method hai jo dat fetch aur data ko send server pe send karne ke kam aata hai.
// pehle ye kam hmm xmlhttprequst se karte the but fecth simple hai
//ye https request ko  handle karne ke kam aata hai
// hmm ek request dete hai badle mai hhme response milta hai
// iske do onject hote hai requestand response
// ye ek promise returns karta hai
// then ya asyn await ka use karke hmm response ko handle karte hai
// let promise = fetch(url,[options])
// server data deta hai json (javascript object notation)format mai
//json() method returns second promise
const url = ""
let parafact = document.getElementById("facts");
let btn = document.getElementById("btn");

let getfacts = async ()=>{
  let response = await fetch(url);
 const data = await response.json();
 parafact.innerHTML = data[0].text;
 
  
};


btn.addEventListener(("click"),getfacts);