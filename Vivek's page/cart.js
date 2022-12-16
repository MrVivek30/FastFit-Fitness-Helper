   // Write all necessery JS here 

    //*****************************************totaL COUNT*******************************
    let len = document.querySelector("#itemx")

    let cartItem = JSON.parse(localStorage.getItem("cart"));
    display(cartItem)
    let total = cartItem.reduce((acc, element) => acc + element.price, 0);
    document.querySelector("#total").innerText =  "Your Total cart Price is :-"+"  $" + total
    console.log(total)


    function display(cartItem) {

        document.querySelector("#cart-container").innerHTML = "";
        cartItem.forEach(function (element, index) {


            let div = document.createElement("div");

            let img = document.createElement("img")
            img.setAttribute("src", element.img)
            let name = document.createElement("h2")
            name.innerText = element.title;
            let Price = document.createElement("h3")
            Price.innerText = "$"+ element.price
           
            let Category = document.createElement("p")
            Category.innerText = element.category

          


           
            let btn3 = document.createElement("button");
            btn3.innerText = "Remove"
            btn3.addEventListener("click", function () {
                deletedata(cartItem, index)
                window.location.reload()
            })

            div.append(img, name, Price, Category, btn3)

            document.querySelector("#cart-container").append(div)


        })

        len.innerText = cartItem.length
        console.log(len)
    }

    function deletedata(data, index) {
        data.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(data))
        display(data)

    }