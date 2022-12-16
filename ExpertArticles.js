//   const links
const checkUrl = "https://i.ibb.co/JC2q3Pp/check.png";
const likeUrl = "https://i.ibb.co/Z8j5SXh/heart.png";
const commentUrl = "https://i.ibb.co/5GxsT67/comment.png";
const container = document.querySelector(".cards_container");
const paginationWrapper = document.getElementById("pagination_wrapper");
const articleUrl = "http://localhost:3000/Articles"
const sortByAuthor = document.getElementById("sortByAuthors")
let outData
// ---------------------------------------------------------------------


// window.addEventListener("load", () => {
//   getArticles(articleUrl)
// });

async function getArticles(articleUrl){
     try {
        let requestArticles = await fetch(`${articleUrl}?_limit=16`);
            if(requestArticles.ok){
                 let  getData = await requestArticles.json(); 
                 renderData(getData)
                 //console.log(getData)
            }
     } catch (error) {
        alert("something went wrong in fetching articles")
     } 
 

}
getArticles(articleUrl)

// pagination-part
var rootElement = document.documentElement

 function renderPaginationButton(){
      paginationWrapper.innerHTML=`
        <div class="button_wrapper">
        ${getAsButton(1,"pagination_buttons",1)}
        ${getAsButton(2,"pagination_buttons",2)}
        ${getAsButton(3,"pagination_buttons",3)}
        ${getAsButton(4,"pagination_buttons",4)}
        ${getAsButton(5,"pagination_buttons",5)}
        </div>
      `

      let paginationButtons = document.querySelectorAll(".pagination_buttons")
      for (let paginationButton of paginationButtons){
        paginationButton.addEventListener("click",function(e){
                let dataId = e.target.dataset.id
                getArticles(`${articleUrl}?_limit=16&_page=${dataId}`)
                resetPrimaryClassInPaginationButtons()
                e.target.classList.add('button_primary')   
                scrollToTop()
         })
      }

      function resetPrimaryClassInPaginationButtons() {
        for (let paginationButton of paginationButtons) {
          paginationButton.classList.remove('button_primary');
        }
      }
 }
//to-scroll-up
 function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
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

 // sort by authers

 async function getAllArticles(articleUrl){
  try {
     let requestArticles = await fetch(articleUrl);
         if(requestArticles.ok){
              let  getData = await requestArticles.json();
              outData =[...getData] 
              // renderData(getData)
              // //console.log(getData)
         }
  } catch (error) {
     alert("something went wrong in fetching articles")
  } 


}
getAllArticles(articleUrl)
 sortByAuthor.addEventListener("change",function(){
  let selected = sortByAuthor.value
  if(selected=="author"){
    getArticles(articleUrl)
  }
     let filterdata= outData.filter(function(elem){
        
        return elem.author==selected
 
       })    
       renderData(filterdata)
       console.log(filterdata)
   })
 