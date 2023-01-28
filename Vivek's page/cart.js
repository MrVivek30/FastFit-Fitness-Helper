//    // Write all necessery JS here 

//     //*****************************************totaL COUNT*******************************
//     let len = document.querySelector("#itemx")

//     let cartItem = JSON.parse(localStorage.getItem("cart"));
//     display(cartItem)
//     let total = cartItem.reduce((acc, element) => acc + element.price, 0);
//     document.querySelector("#total").innerText =  "Your Total cart Price is :-"+"  $" + total
//     console.log(total)


//     function display(cartItem) {

//         document.querySelector("#cart-container").innerHTML = "";
//         cartItem.forEach(function (element, index) {


//             let div = document.createElement("div");

//             let img = document.createElement("img")
//             img.setAttribute("src", element.img)
//             let name = document.createElement("h2")
//             name.innerText = element.title;
//             let Price = document.createElement("h3")
//             Price.innerText = "$"+ element.price
           
//             let Category = document.createElement("p")
//             Category.innerText = element.category

    
//             let btn3 = document.createElement("button");
//             btn3.innerText = "Remove"
//             btn3.addEventListener("click", function () {
//                 deletedata(cartItem, index)
//                 window.location.reload()
//             })

//             div.append(img, name, Price, Category, btn3)

//             document.querySelector("#cart-container").append(div)


//         })

//         len.innerText = cartItem.length
//         console.log(len)
//     }

//     function deletedata(data, index) {
//         data.splice(index, 1)
//         localStorage.setItem("cart", JSON.stringify(data))
//         display(data)

//     }
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

    
let cart_Items =JSON.parse(localStorage.getItem("cart")) || []
let count =Number(localStorage.getItem("Count") )|| 0;

let total=localStorage.getItem("total")|| 0;

console.log("11")
displayItem(cart_Items)


function displayItem(data){
total=0;
count=0;
document.querySelector(".container").textContent=""
document.querySelector("#total").innerHTML=""
data.map(function (ele,i){
    console.log("gddsd")
    let divx = document.createElement("div");

    let div1 = document.createElement("div");
    let image = document.createElement("img")
    image.setAttribute("src",ele.img)

    let brand = document.createElement("p")
    brand.textContent = ele.category
    brand.setAttribute("class","brandFont")

    let name = document.createElement("p")
    name.textContent = ele.title
    name.setAttribute("class","nameFont")


    total+=Number(ele.price);
    localStorage.setItem("total",total)
    document.querySelector("#total").innerHTML=total
    console.log(ele.price)


    let button1 = document.createElement("button")
    button1.textContent="👤 FOR MYSELF"
    button1.setAttribute("class","myself")

    let button2 = document.createElement("button")
    button2.textContent="🎁 As A GIFT"
    button2.setAttribute("class","gift")

    let divButton = document.createElement("div");
    divButton.setAttribute("class","divButton")

    let hr = document.createElement("hr");

    let div2 = document.createElement("div");

   

    let button = document.createElement("button")
    button.textContent="X"
    button.setAttribute("class","Remove")
    button.addEventListener("click", function(){
        count--;
        localStorage.setItem("Count",count)
    
        removItem(ele,i)
    
    })

    let price = document.createElement("p")
    price.textContent= "$"+ ele.price
    price.setAttribute("class","price")
    
    let  divy = document.createElement("div");

    div1.append(image)
    divButton.append(button1,button2)
    div2.append(brand,name,divButton)

    divx.append(div1,div2)
    divy.append(button,price)

    let  divU = document.createElement("div");

    divU.append(divx,divy)
    document.querySelector(".container").append(divU,hr)

})


}
function removItem(ele,i){
    cart_Items.splice(i,1)
    displayItem(cart_Items)
    localStorage.setItem("cart",JSON.stringify(cart_Items))
}