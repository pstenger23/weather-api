const displayWeather = function(weather) {
    //get elements
    const fiveDayContainer = document.getElementById('five-day')
    const daily = document.getElementById('daily');
    const temp = document.getElementById('temp');
    const conditions = document.getElementById('conditions');
    const wind = document.getElementById('wind');
    const humidity = document.getElementById('humidity');
    const uv = document.getElementById('uv');

    const fiveDay = document.getElementsByClassName('day');
    
    for(let i = 0; i <fiveDay.length; i++) {

        
        
        const weatherData = document.createElement('ul');
        weatherData.style = 'list-style: none'

        const temp = document.createElement('li');
        

        const humidity = document.createElement('li');
        

        const windSpeed = document.createElement('li');
        


        
        temp.textContent =  'Temperature: ' + weather.daily[i].temp.day + '° Farenheit';
        humidity.textContent = 'Humidity: ' + weather.daily[i].humidity + '%';
        windSpeed.textContent = 'Wind: ' + weather.daily[i].wind_speed  + 'mp/h';

        weatherData.appendChild(temp);
        weatherData.appendChild(humidity);
        weatherData.appendChild(windSpeed);

        
        fiveDay[i].appendChild(weatherData);
        


        

    }
        

    // create elements
    temp.textContent = 'Temperature: ' + weather.current.temp + '° Farenheit [Feels like: ' + weather.current.feels_like +'° Farenheit]';
    conditions.textContent = 'Clouds: ' + weather.current.clouds + '%';
    wind.textContent = 'Wind: ' + weather.current.wind_speed + ' m/ph';
    humidity.textContent = 'Humidity: ' + weather.current.humidity + '%';
    uv.textContent = 'UV Index: ' + weather.current.uvi
}

const getCoordinates = function(getCoord) {
    //get coordinates
    const lon = getCoord.coord.lon;
    const lat = getCoord.coord.lat;
    console.log(lat, lon)
    const api = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&units=imperial&appid=dbba65cafee668f57241aa6877126bd6";
    
    //fetch
    fetch(api)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        
        displayWeather(data);
    })
    
    

}
const weatherFetch = function(userInput) {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=imperial&appid=dbba65cafee668f57241aa6877126bd6")
    .then(res => res.json())
    .then(data => {
        
        getCoordinates(data);
    })
    
}
const start = function() {
    event.preventDefault();
 
    let userInput = document.getElementById('input').value;
    const cityName = document.getElementById('cityName');
    cityName.textContent = userInput;
    weatherFetch(userInput);
}
const searchBtn = document.getElementById('search')
searchBtn.addEventListener('click', start)