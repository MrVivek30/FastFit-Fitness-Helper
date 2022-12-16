let  postsList = document.querySelector(".post-list")
let url = "http://localhost:3000/pilot";
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
    if(q===1||2||4||8){
        let newData=data.filter(function(elem){
            return elem.category.toLowerCase().includes(q.toLowerCase())
        });
        console.log(newData)
        display(newData)

      
    }
    else{
        console.log("data is not available")
    }
    
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
        let div=document.createElement("div");
        div.className="card-body"
        
        
        let image=document.createElement("img");
        image.src=elem.img;
        image.className="card-img-top"
        let title=document.createElement("h5");
        title.innerText=elem.title;
        title.className="card-title"
        let price=document.createElement("p");
        price.innerText=elem.price;
        price.className="card-text"
        let date=document.createElement("p");
        let dates=new Date()
        date.innerText=dates;
        let author=document.createElement("p");
        author.innerText=elem.author;
        let category=document.createElement("p");
        category.innerText=elem.category
        category.className="card-category"
        let btn =document.createElement("button")
        btn.innerText="Add to Bag"
        btn.className="btn"
        btn.className="btn-primary" 
        let div1=document.createElement("div")
        div1.append(price)
        let div2=document.createElement("div");
        div2.append(btn)
        let maindiv=document.createElement("div");
        maindiv.append(div1,div2)
        maindiv.className="vivek"
        maindiv.style.display="flex";
        maindiv.style.justifyContent="space-between"
        maindiv.style.padding="10px 15px"
        btn.style.marginTop="12px"
        btn.addEventListener("click",function(){
            carts.push(elem)
            localStorage.setItem("cart",JSON.stringify(carts))
            alert("product added sucessfully")
            window.location.href="cart.html"
        })
        div.append(image,category,title,maindiv);
        document.querySelector(".post-list").append(div)
    });
}