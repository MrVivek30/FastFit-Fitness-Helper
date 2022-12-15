const postsList = document.querySelector(".post-list")
const addPostForm = document.querySelector('.add-post-form');
const titleValue = document.getElementById("title-value");
const imageValue = document.getElementById("image-value");
const categoryValue=document.getElementById("category-value");
const priceValue = document.getElementById("price-value");
const btnSubmit = document.querySelector(".btn");
// const dates = new Date();


const url = "http://localhost:3000/gym";
let output = ""
const renderPosts = (posts) => {
    posts.forEach(post => {
        output += `
        <div class="card mt-4 col-md-6 bg-light" >
        <div class="card-body" data-id=${post.id}>
        <img src=${post.img} class="card-img-top" alt="...">
        <p class="card-category">${post.category}</p>
         <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.price}</p>
        
          <a href="#" class="card-link" id="edit-post">Edit</a>
          <a href="#" class="card-link" id="delete-post">Delete</a>
        </div>
      </div>
    `
            ;
    });
    postsList.innerHTML = output;
}
//GET read the posts
fetch(url)
    .then(res => res.json())
    .then(data =>renderPosts(data))
postsList.addEventListener("click", (e) => {
    e.preventDefault();
    let delButton = e.target.id == "delete-post";
    let editButton = e.target.id == "edit-post";
    let id = e.target.parentElement.dataset.id;
    if (delButton) {
        fetch(`${url}/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(() => location.reload())
    }
    if (editButton) {
        const parent = e.target.parentElement;
        let imageContent = parent.querySelector(".card-img-top").textContent;
        let categoryContent=parent.querySelector(".card-category").textContent;
        let titleContent = parent.querySelector('.card-title').textContent;
        let priceContent = parent.querySelector(".card-text").textContent;
        
        imageValue.value = imageContent;
        categoryValue.value=categoryContent;
        titleValue.value = titleContent;
        priceValue.value = priceContent;
        
    }

    //******************** */
    btnSubmit.addEventListener("click", (e) => {
        e.preventDefault()
        fetch(`${url}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                image: imageValue.value,
                category:categoryValue.value,
                title: titleValue.value,
                price: priceValue.value
                
            })
        })
            .then(res => res.json())
            .then(()=>location.reload())
    })
    //update the existing data
    //Mehod:GET
});

//*************************/
//Add new post
//Method:POST
addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            image: imageValue.value,
            title: titleValue.value,
            price: priceValue.value,
           
        })
    })
        .then(res => res.json())
        .then(data => {
            const dataArr = [];
            dataArr.push(data);
            renderPosts(dataArr)
        })
})