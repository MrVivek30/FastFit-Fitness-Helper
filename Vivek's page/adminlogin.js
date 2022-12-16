// let login=document.querySelector(".login")
let form = document.getElementById("form");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let url = "http://localhost:3000/signup"
let flag=false
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        //display(data)
        form.addEventListener("submit",function(e){
            e.preventDefault()
            data.forEach(function (elem) {
                if (email.value == elem.email && pass.value == elem.password) {
                      flag=true;
                }
            })
            if(flag){
                window.location.href="admin.html"
            }
            else{
                alert("invalid credentials")
            }
     })
    })
// let username="admin"
// let password="admin";
// if(username && password){
//     window.location.href="index.html"
// }
// else{
//     alert("Invalid credentials")
// }

// *********************************2 min billi******************************