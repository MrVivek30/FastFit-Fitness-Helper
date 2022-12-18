// import navbar from "../components/navbar.js";
// document.getElementById("navbar").innerHTML = navbar();
// import footer from "../components/footer.js"
// document.getElementById("footer").innerHTML = footer();



let passes = [
    {
      img: "https://d18zdz9g6n5za7.cloudfront.net/products/320/320-16-1-day-pass-a272.jpg",
      price: "1.99",
      date: "1-Day pass",
      button: "Add to Bag",
      pass: "FB PLUS PASS",
    },
    {
      img: "https://d18zdz9g6n5za7.cloudfront.net/products/320/320-15-7-day-pass-8070.jpg",
      date: "7-Day pass",
      price: "3.99",
      button: "Add to Bag",
      pass: "FB PLUS PASS",
    },
    {
      img: "https://d18zdz9g6n5za7.cloudfront.net/products/320/320-14-14-day-pass-b885.jpg",
      date: "$14-Day pass",
      price: "7.99",
      button: "Add to Bag",
      pass: "FB PLUS PASS",
    },
    {
      img: "https://d18zdz9g6n5za7.cloudfront.net/products/320/320-13-30-day-pass-9318.jpg",
      date: "30-Day pass",
      price: "11.99",
      button: "Add to Bag",
      pass: "FB PLUS PASS",
    },
    {
      img: "https://d18zdz9g6n5za7.cloudfront.net/products/320/320-12-90-day-pass-89f6.jpg",
      date: "90-Day pass",
      price: "29.99",
      button: "Add to Bag",
      pass: "FB PLUS PASS",
    },
  ];
  
  // localStorage.setItem("movies", JSON.stringify(movies))
  
  // let img=document.createElement("img")
  
  function displaydata() {
    passes.map(function (el) {
      let div = document.createElement("div");
      div.setAttribute("id", "smalldiv");
  
      let poster = document.createElement("img");
      let sub = document.createElement("sub");
      sub.innerText = el.pass;
      let p = document.createElement("h2");
      let p1 = document.createElement("p");
      let btn = document.createElement("button");
      btn.innerText = el.button;
      btn.setAttribute("id", "btnbag1");
      btn.onclick = () => {
        cartData.push(el);
        localStorage.setItem("cartData", JSON.stringify(cartData));
        window.location.href = "../page/cart.html"
      }
  
      poster.src = el.img;
      p.innerText = el.date;
      p1.innerText = `${el.price}`;
      div.append(poster, sub, p, p1, btn);
      document.querySelector("#passes").append(div);
    });
  }
  displaydata();
  
  // ********************************************************************************************
  
  let passes2 = [
    {
      img: "https://d18zdz9g6n5za7.cloudfront.net/products/320/320-1-10-egift-card-84c3.jpg",
      price: "10.00",
      button: "Add To Bag",
    },
    {
      img: "https://d18zdz9g6n5za7.cloudfront.net/products/320/320-2-20-egift-card-a464.jpg",
      price: "20.00",
      button: "Add To Bag",
    },
    {
      img: "https://d18zdz9g6n5za7.cloudfront.net/products/320/320-3-30-egift-card-a760.jpg",
      price: "30.00",
      button: "Add To Bag",
    },
    {
      img: "https://d18zdz9g6n5za7.cloudfront.net/products/320/320-4-40-egift-card-a504.jpg",
      price: "40.00",
      button: "Add To Bag",
    },
    {
      img: "https://d18zdz9g6n5za7.cloudfront.net/products/320/320-5-50-egift-card-8e17.jpg",
      price: "50.00",
      button: "Add To Bag",
    },
    {
      img: "https://d18zdz9g6n5za7.cloudfront.net/products/320/320-6-75-egift-card-b723.jpg",
      price: "75.00",
      button: "Add To Bag",
    },
    {
      img: "https://d18zdz9g6n5za7.cloudfront.net/products/320/320-8-7999-egift-card-limited-bece.jpg",
      price: "79.00",
      button: "Add To Bag",
    },
    {
      img: "https://d18zdz9g6n5za7.cloudfront.net/products/320/320-7-100-egift-card-8673.jpg",
      price: "100.00",
      button: "Add To Bag",
    },
  ];
  
  // localStorage.setItem("movies2", JSON.stringify(movies2))
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  let div1 = document.createElement("div1");
  let img1 = document.createElement("img1");
  
  function display() {
    passes2.map(function (el) {
      let div1 = document.createElement("div1");
  
      let poster = document.createElement("img");
      let p = document.createElement("h2");
      let btn = document.createElement("button");
      btn.innerText = el.button;
      btn.setAttribute("id", "btnbag");
      btn.onclick = () => {
        cartData.push(el);
        localStorage.setItem("cartData", JSON.stringify(cartData));
        window.location.href = "cart.html"
      }
  
      poster.src = el.img;
      p.innerText = `${el.price}`;
      div1.append(poster, p, btn);
      document.querySelector("#passes2").append(div1);
    });
  }
  displaydata();
  
  
  document.getElementById("programs").onclick = () => {
    window.location.href = "../page/programs.html"
  }
  
  document.getElementById("meals").onclick = () => {
    window.location.href = "../page/meals-plans.html"
  }
  
  document.getElementById("fb").onclick = () => {
    window.location.href = "../page/Store.html"
  }