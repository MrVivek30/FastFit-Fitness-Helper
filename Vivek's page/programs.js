// <!------------------- navigation bar code ------------>
let navbar=document.querySelector(".nav")
    
window.onscroll=function(){
    navbar.classList.add("sticky");
}
// <!------------------- navigation bar code ------------>


let hamburger = document.querySelector('#hamburger>li>span')

let hamburgerDown = document.querySelector('#hamburger>li>div')
let hamcount = 0
hamburger.addEventListener('click', () => {
    if (hamcount == 0) {

        hamburger.classList.add = 'material-symbols-sharp'
        hamburger.classList.remove = 'material-symbols-outlined'
        hamburger.textContent = 'close'
        hamburgerDown.style.right = '0px'
        hamcount++
    } else {


        hamburger.textContent = 'menu'
        hamburger.classList.add = 'material-symbols-outlined'
        hamburger.classList.remove = 'material-symbols-sharp'
        hamcount = 0
        hamburgerDown.style.right = '-70%'
    }

})






let  postsList = document.querySelector(".post-list")
let url = "http://localhost:3000/gym";
let data=[]

// let output = ""
// const renderPosts = (posts) => {

//     //*****************creating elements card********************************* */
//     posts.forEach(post => {
//         output += `
//         <div class="card-body" data-id=${post.id}>
//         <img src=${post.img} class="card-img-top" alt="...">
//         <p class="card-category">${post.category}</p>

//          <h5 class="card-title">${post.title}</h5>
//          <div id="vivek">
//           <div><p class="card-text">${post.price}</p></div>
//          <div> <button  class="btn btn-primary">Add to Bag</button></div></div>
          
//       </div>
//     `
//             ;
//     });
//     postsList.innerHTML = output;
// }
// fetch(url)
//     .then(res => res.json())
//     .then(data =>renderPosts(data))


async function showData(){
    try{
        let res=await fetch(url);
        out=await res.json();
        data=out;
        console.log(out);
        display(out);
    }
    catch(err){
        console.log(err);
    }
}
showData();

function search(){
    let q=document.querySelector("#search").value;
 
        let newData=data.filter(function(elem){
            return elem.category.toLowerCase().includes(q.toLowerCase())||elem.title.toLowerCase().includes(q.toLowerCase())
        });
        console.log(newData)
        display(newData)

    
}

function filter(){
    let select=document.querySelector(".filter").value;
    if(select=="Workout Programs"){
        display(data)
    }else{
        let week=data.filter(function(elem){
            return elem.category==select

        })
        display(week)
    }
}
function display(data){
    let carts=JSON.parse(localStorage.getItem("cart")) || [];
    document.querySelector(".post-list").innerHTML="";

    data.forEach(function(elem){
        let divu=document.createElement("div");
        divu.className="card-body"
        
        
        let image=document.createElement("img");
        image.src=elem.img;
        image.setAttribute("class","img")

        let title=document.createElement("h5");
        title.innerText=elem.title;
        title.setAttribute("class","name")
        
   
        let category=document.createElement("p");
        category.innerText=elem.category
        category.setAttribute("class","cat")

        let price=document.createElement("p");
        price.innerText=elem.price;
        price.setAttribute("class","price")

        let price1=document.createElement("p");
        price1.innerText="As Low As";
        price1.setAttribute("class","price1")

        let btn =document.createElement("button")
        btn.innerText="👜 Add to Bag"
        btn.setAttribute("class","btn")
      
        let div1=document.createElement("div")
        div1.append(price1,price)

        let div2=document.createElement("div");
        div2.append(btn)

        let maindiv=document.createElement("div");
        maindiv.append(div1,div2)
        maindiv.setAttribute("class","cardbuttons")
        
        btn.addEventListener("click",function(){
            carts.push(elem)
            localStorage.setItem("cart",JSON.stringify(carts))
            alert("product added sucessfully")
            // window.location.href="cart.html"
        })
        let div=document.createElement("div");
        div.setAttribute("class","cardbot")
        div.append(category,title,maindiv);
        
        divu.append(image,div);
        document.querySelector(".post-list").append(divu)
    });
}