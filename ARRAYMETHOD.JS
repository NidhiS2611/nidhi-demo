// FILTER
const num = [1,2,3,4,5,6]
//const newnum = num.filter((num) => num > 4)
//console.log(newnum);

// if we use simple paranthesis then we do not required to return 
//const num = [1,2,3,4,5,6]
//const newnum = num.filter((num) => {
  //  return num>4
//})
//console.log(newnum);
// if we use scope then return is compulsory
// by using for each
const mynum =[]
num.forEach( (num) => {
    if (num>4) {
        mynum.push(num)
    } 
   // console.log(mynum);
        
    
})
// map 
const myn1 = num.map((num) => num + 10)
//console.log(myn1);
 // it automaticaly return
 // reduce 
 // it reduces array 
 // accumulatore = 0;
 const nums = [1,6,9,8]
 const arr = nums.reduce(function(accumulatore,currva) {
    console.log(`acc:${accumulatore} and currva:${currva}`);
    
    return accumulatore +currva;

 },0)
//console.log(arr);

