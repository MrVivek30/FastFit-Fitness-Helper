async function getArticles(){
      
    let requestArticles = await fetch("http://localhost:3000/Articles");
    let data = await requestArticles.json();
    console.log(data)
}
getArticles()


// select tags