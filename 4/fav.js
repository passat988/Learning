const catalog = document.querySelector(".catalog");
const anyFav = JSON.parse(localStorage.getItem("key"))
  ? JSON.parse(localStorage.getItem("key"))
  : [];

let favArray = [...anyFav];
const nodeList = document.querySelectorAll(".catalog-item-name");
const result = [];

for (const node of nodeList) {
  result.push(node);
}

for (let parsedItem of anyFav) {
  for (let catalogItem of result) {
    if (parsedItem === catalogItem.innerHTML) {
      catalogItem.parentNode.parentNode
        .querySelector(".catalog-img-container")
        .querySelector(".favorite_star_gold")
        .classList.add("gold");
    }
  } 
}


catalog.addEventListener("click", (event) => {
  if (event.target.className === "favorite_star_silver") {
    event.target.previousElementSibling.classList.add("gold");

    favArray.push(
      event.target.parentNode.parentNode
        .querySelector(".characteristics")
        .querySelector(".catalog-item-name").innerHTML
    );

    localStorage.setItem("key", JSON.stringify(favArray));
    console.log(favArray);
  }
});

catalog.addEventListener("click", (event) => {
  if (event.target.classList.contains("gold")) {
    event.target.classList.remove("gold");
    favArray = JSON.parse(localStorage.getItem("key"));
    const index = favArray.indexOf(
      event.target.parentNode.parentNode
        .querySelector(".characteristics")
        .querySelector(".catalog-item-name").innerHTML
    );
    if (index === -1) {
      return;
    }
    favArray.splice(index, 1);
    localStorage.setItem("key", JSON.stringify(favArray));
    console.log(favArray);
  }
});
