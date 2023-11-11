"use strict"
let row = document.querySelector(".container .row");

fetch("https://api.tvmaze.com/shows")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length - 1; i++) {
      row.innerHTML += `
        <div class="col-3">
          <div class="card" style="width: 18rem;">
            <img src="${data[i].image.medium}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[i].name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="details.html?id=${data[i].id}" class="btn btn-primary">Go to offical Site</a>
            </div>
          </div>
        </div>`;
    }
    console.log(data)
    // console.log(data)
  })
  .catch((error) => console.error(error));

//   document.querySelector(".btn").addEventListener("click",function(){
// fetch("https://api.tvmaze.com/shows")
//   .then((res) => res.json())
//   .then((data) => console.log("ghjk"))
//   })


