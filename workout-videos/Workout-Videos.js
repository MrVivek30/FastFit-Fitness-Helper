// const jsonServer = require("json-server"); // importing json-server library
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

// server.use(middlewares);
// server.use(router);

// server.listen(port);


let main = document.getElementById("bod")
let card = document.querySelector(".cards")
let paginationWrapper = document.getElementById("pagination");
let WorkoutVideos = "https://api-fitness.onrender.com/workoutVideos"


window.addEventListener("load",()=>{
    fetchAndRenderWorkout(`${WorkoutVideos}?_limit=20&_page=1`);
    renderPaginationBtn();
})


function renderPaginationBtn(){
    paginationWrapper.innerHTML = `
    <div class="paginationbtnlist">
      ${getAsBtn("1","pagination-btn button", 1)}
      ${getAsBtn("2","pagination-btn button", 2)}
      ${getAsBtn("3","pagination-btn button", 3)}
    </div>
    `

    let paginationButtons = document.querySelectorAll('.pagination-btn');
    for(let paginationButton of paginationButtons){
        paginationButton.addEventListener("click",(e)=>{
            let dataId = e.target.dataset.id;
            fetchAndRenderWorkout(`${WorkoutVideos}?_limit=20&_page=${dataId}`)
        })
    }
}



fetch('https://jsonplaceholder.typicode.com/comments?_limit=6&_page=1')
  .then( response => response.headers.get( "X-Total-Count" ) )
  .then((data) => { console.log(data)});


  function fetchAndRenderWorkout(WorkoutVideos) {
    fetch(WorkoutVideos)
    .then(res => {
      return Promise.all([res.json(),res.headers.get("X-Total-Count")])
    })
    .then(data => {
      let [recipeDataRaw] = data;
      let recipeCardData = recipeDataRaw.map(item => {
        let obj = {...item};
        obj.image = item.image
        obj.title = item.title;
        obj.subtitle = item.subtitle;
        obj.duration = item.duration;
        return obj;
      })
      renderCardList(recipeCardData);
      // renderPaginationBtn(recipeDataCount);
    })
  }

function getAsBtn(text, cls, dataId){
    return `<button class=${cls} ${dataId ? `data-id=${dataId}`: ""} >${text}</button>`
}



function renderCardList(cardData) {
    main.innerHTML = `
    <div id="bodin">
      ${cardData
        .map((item) => {
          let imageURL = item.img;
          let title = item.title;
          let subT = item.subtitle;
          let duration = item.duration;
  
          return getAsCard(imageURL, title, subT, duration);
        })
        .join("")}
    </div>
  `;
  }



  function getAsCard(imgSrc, title, subT, duration) {
    return `
  <div class="cards">
    <div class="upper">
        <img src="${imgSrc}" alt="">
    </div>
     <div class = bottom>
        <div class="workout-title">
            <h1>${title}<br>${subT}</h1>
            <h2>${duration}</h2>
        </div>
         <div class="schedule">
            <div><i class="fa-regular fa-calendar"></i></div>
            <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
          </div>
        </div>
        </div>
  `;
  }
  
  