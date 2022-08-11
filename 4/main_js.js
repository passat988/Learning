document.body.onclick = (event) => {
  const number = document.querySelector(".phone-number");
  const copyImg = event.target;
  if (
    number.classList.contains("phone-number") ||
    copyImg.classList.contains("copy-img")
  ) {
    navigator.clipboard.writeText(number.innerHTML);
  }
};

const copyControl = document.querySelector(".number-and-img");
const copyToast = document.querySelector(".copyed");

copyControl.addEventListener("click", () => {
  copyToast.classList.add("copyed_active");

  setTimeout(() => {
    copyToast.classList.remove("copyed_active");
  }, 2000);
});


document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
}

let curUrl = document.URL;

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
           if (curUrl.includes("index.html")){
            document.location.href = "./index2.html"}
           
          if (curUrl.includes("index2.html")){
            document.location.href = "./index3.html"}

          if (curUrl.includes("index3.html")){
            document.location.href = "./index4.html"}

        
        } else {
          if (curUrl.includes("index4.html")){
            document.location.href = "./index3.html"}
          
          if (curUrl.includes("index3.html")){
            document.location.href = "./index2.html"}

          if (curUrl.includes("index2.html")){
            document.location.href = "./index.html"}
      
        }
      }

    xDown = null;
    yDown = null;


}


const iconMenu = document.querySelector(".mobile-menu");
if (iconMenu) {
  const menuBody = document.querySelector(".navigation");
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
