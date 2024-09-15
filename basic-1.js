// types of variable 
// var,let,const
//var is function and global scoped,and var is added as the window object
//let and const are block scoped
//in const variable we have to intilaize the value just after declartion otherwise it gives error
//take a example
var a = "nidhi"
//console.log(a)
let b = 12
//console.log(b);
const c = 34
//console.log(c);

//lets do investigation
{
    let d = 23
    //console.log(d);

}

//console.log(d);

const e = 6;
//console.log(e);
//const f;
//console.log(f);

function abs() {
    var name = "nidehi"
    //console.log(name);

}
abs();
// console.log(name);
{
    var num = 78
    //console.log(num);

}
//console.log(num);
//it means var is not block scoped we can access the value of var outside the braces.

//types of data types
// 1. primitive(call by value)  
// Numbers,String,Bigint,boolean,Symbol,null,undefined
// no changes in original after changing in copy .
//2.non-primitive(call by refrences)  

// array , object 
// changes after changing in copy

//type of datatype
let n1 = 76
//  console.log(typeof(n1));
let name1 = "kalpana"
//   console.log(typeof(name1));
let bol = true
console.log(typeof (bol));
let s = null
//    console.log(typeof(s));
let r;
//   console.log(typeof(r));


//type conversion
let sum = 45
let chng = String(sum)
//  console.log(chng);
let str = "name"
let num2 = Number(str)
//console.log(num2);
let bol1 = true
let num3 = Number(bol1)
//  console.log( typeof num3);
let khali = null
let no = Number(khali)
// console.log( typeof no);
// String

console.log("3" + 3);
console.log(3 + "3");
console.log("2" + 6 + 6);
console.log(2 + 6 + "6");
console.log("2" === 2);

//************************************************** */
//stack && heap
let mystack = "nidhishkya"
let another = mystack
another = "kalpana"
//console.log(mystack);
//console.log(another);
//heap
let myobj = {
    name: "nidhi",
    id: 56
}
let myanotherob = myobj
//console.log(myobj);
//console.log(myanotherob);
myanotherob.id = 67
console.log(myanotherob);
console.log(myobj);
//************************************************************** */
let nam = 'nidhi'
let sirname = "shakya"
console.log(`hello my name is ${nam}`);
const game = new String("nidhi")
console.log(game[0]);
console.log(game.length);
console.log(game.indexOf('i'));
                                      all about basic thamks 






















