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

let form = document.querySelector('form');

document.addEventListener('submit', function (event) {

  	event.preventDefault();
 	let url = 'https://jsonplaceholder.typicode.com/posts';

     const data = new FormData(form)
     for ( const entry of data){
        console.log(entry);
     }

     invisibleBlock();

  	// fetch(url, {
 	// 	  method: 'POST',
 	// 	  body: new URLSearchParams(Array.from(new FormData(form))),
    // }).then(function (response) {
 	// 		if (response.ok) {
 	// 			return response.json();
    //     	}
 	//    return Promise.reject(response);
    // }).then(function (formData) {
 	//    console.log(formData);
    //     invisibleBlock();
    // }).catch(function (error) {
    //    console.warn(error);
    // });
});