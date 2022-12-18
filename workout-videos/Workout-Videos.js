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
   <div class="flip-front">
   <div class="flip-inner">
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
    </div>
        <div class="display">
                    <div><span class="material-symbols-outlined">
                            unknown_med
                        </span>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td class="heading">Difficulty </td>
<td>
                                    <span class="material-symbols-outlined" style="color:red ;">
                                        local_fire_department
                                    </span><span class="material-symbols-outlined" style="color:red ;">
                                        local_fire_department
                                    </span><span class="material-symbols-outlined" style="color:red ;">
                                        local_fire_department
                                    </span><span class="material-symbols-outlined">
                                        local_fire_department
                                    </span><span class="material-symbols-outlined">
                                        local_fire_department
                                    </span>
                                </td>
                            </tr>
                            <tr>

                                <td class="heading">Training type</td>
                                <td> Cardiovascular, pilates</td>


                            </tr>
                            <tr>
                                <td class="heading">Equipments</td>
                                <td>Mat</td>

                            </tr>
                            <tr>
                                <td class="heading">Burn Estimate</td>
                                <td> 2000 calories</td>
</tr>
                        </tbody>
                    </table>
                    <table class="table-2">
                        <tbody>
                            <tr>
                                <td>Your stats</td>
                                <td>Community</td>
                            </tr>
                            <tr>
                                <td>
                                    <p><span class="material-symbols-outlined" style="color: #4296cb;">
                                            check_circle
                                        </span> N/A</p>
                                </td>

                                <td>
                                    <p><span class="material-symbols-outlined" style="color: #4296cb;">
                                            check_circle
                                        </span> 10</p>
                                    <p> <span class="material-symbols-outlined" style="color: red;">
                                            favorite
                                        </span> 20</p>
                                    <p><span class="material-symbols-outlined" style="color: green;">
                                            comment
                                        </span> 20</p>
                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>
  </div>
  
  `;
  }
  
  