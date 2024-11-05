const form = document.querySelector("form")
const submit = document.querySelector(".submit")
let content = document.querySelector(".content")
form.addEventListener("submit" ,(e)=>{
    let name = e.target.name.value
    let email = e.target.email.value
    let phone = e.target.phone.value
    
   const userdata = JSON.parse(localStorage.getItem("userdetails")) ?? [];
   userdata.push({
    'name':name,
    'email':email,
    'phone':phone
   })
   localStorage.setItem("userdetails",JSON.stringify(userdata))
   e.target.reset()
   displaydata();
 e.preventDefault();
})

function displaydata(){
    const userdata = JSON.parse(localStorage.getItem("userdetails")) ?? [];
    let data = ''
    userdata.forEach((element , i) =>{
         
        data+= `   <div class="items">
                <span onclick = "removedata(${i})">&times</span>
                <h4>Name</h4>
                <div>${element.name}</div>
                <h4>Email</h4>
                <div>${element.email}</div>
                <h4>Phone</h4>
                <div>${element.phone}</div>
            </div>`;


    })
    
    
    content.innerHTML = data
}

function removedata(index){
    const userdata = JSON.parse(localStorage.getItem("userdetails")) ?? [];
    userdata.splice(index ,1)
    localStorage.setItem("userdetails",JSON.stringify(userdata))
    displaydata();

}
displaydata();