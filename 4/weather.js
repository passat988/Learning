weaterButton = document.querySelector('.weather')
weaterButton.addEventListener("click", (event) => {
let newRequest = new XMLHttpRequest();

newRequest.open("GET",
"http://api.openweathermap.org/data/2.5/weather?q=Zhytomyr,ua&appid=096e16b41f3ecff9ba5e82c4e4f41c27");

newRequest.onload = () => {
    var ourWeather = JSON.parse(newRequest.responseText);
    console.log(ourWeather);
}

newRequest.onerror = err => console.error('Ошибка');

newRequest.send();
})


