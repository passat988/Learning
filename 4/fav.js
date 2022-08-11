const goldStar = document.querySelector(".favorite_star_gold");
const silverStar = document.querySelector(".favorite_star_silver");
const catalog = document.querySelector(".catalog");

const anyFav = localStorage.getItem('className') ? localStorage.getItem('className') : null;

if (anyFav) {
    goldStar.classList.add("gold");
}





catalog.addEventListener("click", event => {
    if (event.target.className === 'favorite_star_silver') {
        event.target.previousElementSibling.classList.add("gold");
      }
  }
)

catalog.addEventListener("click", event => {
    if (event.target.classList.contains('gold') ){
        event.target.classList.remove('gold');
    }  
  }
)




// silverStar.addEventListener("click", () => {
//     goldStar.classList.add("gold");
//     localStorage.setItem('className', 'gold'); 
// })

// goldStar.addEventListener("click", () => {
//     goldStar.classList.remove("gold");
//     localStorage.removeItem('className'); 
// });