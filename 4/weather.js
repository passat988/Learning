weaterButton = document.querySelector('.weather')
weaterButton.addEventListener("click", (event) => {
let newRequest = new XMLHttpRequest();

newRequest.open("GET",
"http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22");

newRequest.onload = () => {
    var ourWeather = JSON.parse(newRequest.responseText);
    console.log(ourWeather);
}

newRequest.onerror = err => console.error('Ошибка');

newRequest.send();
})