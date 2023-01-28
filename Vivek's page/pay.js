let form=document.querySelector("#form");
let LsData=JSON.parse(localStorage.getItem("payment"))||[];
form.addEventListener("submit",function(event){
    event.preventDefault()
    let obj={
        name:form.name.value,
        card:form.card.value,
        cvv:form.cvv.value,
        expiry:form.expiry.value,
    }
    if(obj.name==""||obj.card==""||obj.cvv=="" ||obj.expiry==""){
        alert("please fill the details")
    }
    else{
        LsData.push(obj);
        localStorage.setItem("payment",JSON.stringify(LsData))
        window.location.href='otp.html'
    }
})