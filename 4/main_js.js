document.body.onclick = (event) => {
    const number = document.querySelector('.phone-number')
    const copyImg = event.target;
    if (number.classList.contains('phone-number')  || copyImg.classList.contains('copy-img')) {
        navigator.clipboard.writeText(number.innerHTML);
        
    }
}

const visibleBlock = function() {
    modal.style.display = "block";
}
const invisibleBlock = function() {
    modal.style.display = "none";
}



// document.addEventListener('touchstart', handleTouchStart, false);     
// document.addEventListener('touchmove', handleTouchMove, false);

// let xDown = null;                                                        
// let yDown = null;                                                        

// function handleTouchStart(evt) {                                         
//     xDown = evt.touches[0].clientX;                                      
//     yDown = evt.touches[0].clientY;                                      
// };                                                

// function handleTouchMove(evt) {
//     if ( ! xDown || ! yDown ) {
//         return;
//     }

//     let xUp = evt.touches[0].clientX;                                    
//     let yUp = evt.touches[0].clientY;

//     let xDiff = xDown - xUp;
//     let yDiff = yDown - yUp;
//     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
//         if ( xDiff > 0 ) {
//             document.location.href = "./index2.html"
//         } else {
//             document.location.href = "./index3.html"
//         }                       
//     } 
    
//     xDown = null;
//     yDown = null;                                             
// };

document.addEventListener('touchstart', handleTouchStart, false);     
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;                                                        
let yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

let curUrl = document.URL;

const pagesArr =[ "", 2, 3, 4 ]

let leftswipe = function(){
    for ( let i =1; i< pagesArr.length; i++){
        if(curUrl.indexOf("file:///C:/Users/User/Documents/GitHub/Learning/4/index"+ pagesArr[i] +".html")!=-1){ 
            document.location.href = "./index"+ pagesArr[i+1] +".html"
         }   
    }
}

let rightswipe = function(){
    for ( let i =1; i< pagesArr.length; i++){
        if(curUrl.indexOf("file:///C:/Users/User/Documents/GitHub/Learning/4/index"+ pagesArr[i] +".html")!=-1){ 
            document.location.href = "file:///C:/Users/User/Documents/GitHub/Learning/4/index"+ pagesArr[i-1] +".html"
         }   
    }
}

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
            leftswipe()
        } else {
            rightswipe()
        }                       
    } 
    
    xDown = null;
    yDown = null;                                             
};

const iconMenu = document.querySelector('.mobile-menu')
if (iconMenu){
    const menuBody = document.querySelector('.navigation')
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}