function addlanguage(langname) {
  const li =  document.createElement("li")
  li.innerHTML = `${langname}`
  document.querySelector(".language").appendChild(li)
  
}
addlanguage("python")
addlanguage("html")
function add1language(langname) {
  const li =  document.createElement('li')
  li.appendChild(document.createTextNode(langname))
  document.querySelector(".language").appendChild(li)
}
//
//***************************************** */
// events 
// events are signal jo ek action perform karta hai
// event.target hmme batata hai ki kis element pe eventlag hai 
//event.target.value ye elment ki value batata hai
//event.target.id ye ek id provide kararta hai sare element ko
//click,dblclick,mouseenter,mouseleave,mouseenter,mouseup,mousehover,mousemove,touchstart,wheel,scroll,input,focus,blurr,submit these are events
//  event bubbling 
// jb hmm children pe lagate hai tao children pe affcet tao hota hi hai pr parent pe bhi hota hai
// bottom se top jata hai ye like bubble
// to stop this we have to apply stop propagation function()in that particular element
//event capturing
//if we apply true the it start capturing 
//it start from top to bottom 
// event simulate
