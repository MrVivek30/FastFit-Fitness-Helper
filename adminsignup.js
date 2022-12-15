let form=document.querySelector("#form");
// let username=document.querySelector("#username")
// let firstname=document.querySelector("#firstname")
// let lastname=document.querySelector("#lastname");
// let email=document.querySelector("#email");
// let number=document.querySelector("#mobil");
// let password=document.querySelector("#pass");
let url="http://localhost:3000/signup"
form.addEventListener("submit",addData)
async function addData(e){
   try {
    e.preventDefault();
    // let all_input_tags=document.querySelectorAll("#container input");
     let userobj={
        username:form.username.value,
        firstname:form.firstname.vaue,
        lastname:form.lastname.value,
        email:form.email.value,
        number:form.mobil.value,
        password:form.pass.value
     };
    // for(let i=0;i<all_input_tags.length-1;i++){
    //     userobj[all_input_tags[i].id]=all_input_tags[i].value;
    // }
    let register_request=await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userobj)
    });
    if(register_request.ok){
        alert("User has been created")
        window.location.href="adminlogin.html"
    }
    else{
        alert("bad request")
    }
   }
   catch (error) {
    alert("something went wrong")
   }
}