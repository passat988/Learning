const modal = document.getElementById('myModal')
const btn = document.getElementById('myBtn')
const span = document.getElementsByClassName("close")[0]

const visibleBlock = function() {
    modal.style.display = "block";
}
const invisibleBlock = function() {
    modal.style.display = "none";
}

const missClick = function(event) {
    if (event.target == modal){
        modal.style.display = "none"
    }
}

btn.addEventListener( 'click', visibleBlock, false )
span.addEventListener( 'click', invisibleBlock, false )
document.addEventListener( 'click', missClick, false )