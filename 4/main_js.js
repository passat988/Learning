const video = document.querySelector(".bgvideo")
const wrap = document.querySelector(".wrapper")

function changeTheme(){
    if (video.classList.contains("bgvideo")){
        video.classList.remove("bgvideo");
        video.classList.add("bgvideo-theme");
    } else if(video.classList.contains("bgvideo-theme")){
        video.classList.remove("bgvideo-theme");
        video.classList.add("bgvideo");
    }

    if (wrap.classList.contains("wrapper")){
        wrap.classList.remove("wrapper");
        wrap.classList.add("wrapper-theme");
    } else if(wrap.classList.contains("wrapper-theme")){
        wrap.classList.remove("wrapper-theme");
        wrap.classList.add("wrapper");
    }
}

let activeTheme = localStorage.getItem('bgvideo-theme')
console.log(activeTheme)

if (activeTheme != null){
    video.classList.remove("bgvideo");
    video.classList.add("bgvideo-theme");
}




const modal = document.getElementById('myModal')
const btn = document.getElementById('myBtn')
const span = document.getElementsByClassName("close")[0]

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal){
        modal.style.display = "none"
    }
}




document.body.onclick = (event) => {
    const elem = event.target;
    if (elem.classList.contains('phone-number')) {
        console.log(elem);
        navigator.clipboard.writeText(elem.innerHTML);
    }
}




document.addEventListener('touchstart', handleTouchStart, false);     
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;                                                        
let yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

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
            document.location.href = "./index3.html"
        } else {
            document.location.href = "./index2.html"
        }                       
    } 
    
    xDown = null;
    yDown = null;                                             
};