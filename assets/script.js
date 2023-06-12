var cityInput = document.querySelector('#cityInput')
var searchBTN = document.querySelector('#search')
var city = document.querySelector('#city');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var humid = document.querySelector('#humid');
apiKey = "399e622c989342e9ada67dfe72064241";

searchBTN.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid='+apiKey+'&units=imperial')
    .then(response => response.json())

    .then(data => {
        var cityName = data['name'];
        var temperature = data['main']['temp'];
        var windSpeed = data['wind']['speed']
        var humidity = data['main']['humidity'];
        city.innerHTML = `<span>${cityName}<span>`;
        temp.innerHTML =`Temperature: <span>${temperature} F<span>`;
        wind.innerHTML =`Wind: <span>${windSpeed} Mp/h<span>`;
        humid.innerHTML =`Humidity: <span>${humidity}%<span>`;
    })

    .catch(error => alert("Please enter a valid City."));
})
