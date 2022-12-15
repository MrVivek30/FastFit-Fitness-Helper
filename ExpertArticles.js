//   const links
const checkUrl = "https://i.ibb.co/JC2q3Pp/check.png";
const likeUrl = "https://i.ibb.co/Z8j5SXh/heart.png";
const commentUrl = "https://i.ibb.co/5GxsT67/comment.png";
const container = document.querySelector(".cards_container");
const paginationWrapper = document.getElementById("pagination_wrapper");
const articleUrl = "http://localhost:3000/Articles"
let total_data_count
// ---------------------------------------------------------------------


async function getArticles(articleUrl){
     try {
        let requestArticles = await fetch(`${articleUrl}`);
            if(requestArticles.ok){
                 let  getData = await requestArticles.json();
                 renderData(getData)
                 console.log(getData)
                //  let total_data_count= fetch_todo_request.headers.get("x-total-count");
                 total_data_count = getData.length
                 console.log(total_data_count)
            }
     } catch (error) {
        alert("something went wrong in fetching articles")
     } 
 

}
getArticles(articleUrl)

// pagination-part


 function renderPaginationButton(){
      paginationWrapper.innerHTML=`
        <div class="button_wrapper">
        ${getAsButton(1,"pagination_buttons",1)}
        ${getAsButton(2,"pagination_buttons",2)}
        ${getAsButton(3,"pagination_buttons",3)}
        </div>
      `

      let paginationButtons = document.querySelectorAll(".pagination_buttons")
      for (let paginationButton of paginationButtons){
        paginationButton.addEventListener("click",function(e){
                let dataId = e.target.dataset.id
                getArticles(`${articleUrl}?_limit=5&_page=${dataId}`)
         })
      }
 }
 renderPaginationButton()


function getAsButton(text, cls, dataId ) {
    return `<button class="${cls}" ${dataId ? `data-id = ${dataId}` : ''} >${text}</button>`  
  }

//--------------------------

 function renderData (data){
     container.innerHTML = `
        ${ data.map((item)=>{     
            let id = item.id;
            let author = item.author;
            let category = item.category;
            let image = item.image;
            let title = item.title;
            let readtime = item.readtime;
            let seen = item.seen;
            let likes = item.likes;
            let comment = item.comment;
            let free = item.free;
            return getAsCards(id,author,category,image,title,readtime,seen,likes,comment,free)
        }).join("")}
     `;
 }

 function getAsCards(id,author,category,image,title,readtime,seen,likes,comment,free){
               
    return  `

    <!---->
    <div class="cards">
      <img class="pictures" src="${image}" alt="${author}">
      <div class="free"><div class="freeicon"><p class="freeicontext">Free</p></div></div>
      <p class="box_text">
        ${title}
      </p>
      <p class="box_time">${readtime}</p>
      <!-- hidden  --> 
  <div class="hidden">
      <div>
          <pre class="pre">Category         <span class="boldtext">${category}</span></pre> 
        <hr class="line">
        <p>Community</p>
      </div>
      <div>
          <img class="icons" src=${checkUrl} alt="">
          <p class="span">${seen}</p>
      </div>
      <div>
          <img class="icons" src=${likeUrl} alt="">
          <p class="span">${likes}</p>
      </div>
      <div>
          <img class="icons" src=${commentUrl} alt="">
          <p class="span">${comment}</p>
      </div>
</div>
      <!-- hidden  -->
    </div>
    <!---->

    `;
 }
