const API_Key = '699838e9c691cfc877855ed97ad10689';


//Fetching the weather data

function fetchWeather(cityName) {
    const URL = `https://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${API_Key}&units=metric`;

    fetch(URL)
        .then(res => res.json())
        .then(response => {

            if (!response.list || response.list.length === 0 || response.list === isNaN) {
                alert('City not found. Please enter a  valid city name.')
            }
            const theWeather = response?.list[0].main;

            const card = document.querySelector('.weather_card');

            if (card) {
                card.style.display = 'block';
            }

            //Upadating the weather details

            currentWeather(theWeather);
            feelsLike(theWeather);
            humidity(theWeather);
            max_temp(theWeather);
            min_temp(theWeather);
            getWeatherConditions(cityName);
            getWeatherIcon(cityName);

            const placeName = document.querySelector('.cityName');
            placeName.textContent = cityName;
        })
        .catch(err => {
            console.log(err);
        })
}

//Getting the name of the city 

function searchWeather() {
    const cityName = document.querySelector('#city').value || 'Lisbon';

    fetchWeather(cityName);
}

//Adding an event so that the search is activated when the enter key is pressed

const enter_button = document.querySelector('input[type ="text"]');

enter_button.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchWeather();
    };
});

//Functions to update the weather details

function currentWeather(data) {
    const temp_wrapper = document.querySelector('.temperature');
    temp_wrapper.textContent = `${Math.round(data.temp)}°C`;
}

function feelsLike(data) {
    const feeling = document.querySelector('.feelslike');
    feeling.textContent = `Feels like: ${Math.round(data.feels_like)}°C`;
}

function humidity(data) {
    const humid = document.querySelector('.humidity');
    humid.textContent = `Humidity: ${Math.round(data.humidity)}%`;
}

function max_temp(data) {
    const max_temperature = document.querySelector('.max_temp');
    max_temperature.textContent = `Max-Temp: ${Math.round(data.temp_max)}°C`;
}

function min_temp(data) {
    const min_temperature = document.querySelector('.min_temp');
    min_temperature.textContent = `Min-Temp: ${Math.round(data.temp_min)}°C`;
}

//Function to get the weather conditions

function getWeatherConditions(cityName) {
    const URL = `https://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${API_Key}&units=metric`;

    fetch(URL)
        .then(res => res.json())
        .then(response => {
            const mainWeather = response?.list[0].weather[0].main.toLowerCase();

            changeBackground(mainWeather);
            // console.log(mainWeather);

            const conditions = document.querySelector('.conditions');
            conditions.textContent = `Current conditions: ${mainWeather}`;

        })

}

//Getting the weather icon

function getWeatherIcon(cityName) {
    const URL = `https://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${API_Key}&units=metric`;

    fetch(URL)
        .then(res => res.json())
        .then(response => {
            const the_icon = response?.list[0].weather[0].icon;

            const iconUrl = `https://openweathermap.org/img/wn/${the_icon}@2x.png`;

            const weatherIcon = document.querySelector('.weather_icon');
            weatherIcon.src = iconUrl;

            console.log(the_icon);

        })
}

//Changing the background according to the weather conditions

function changeBackground(weatherCondition) {
    const body = document.body;

    body.className = '';

    switch (weatherCondition) {
        case 'clear':
            body.classList.add('clear-sky');
            break;
        case 'clouds':
            body.classList.add('clouds');
            break;
        case 'thunderstorm':
            body.classList.add('thunder');
            break;
        case 'drizzle':
            body.classList.add('drizzle');
            break;
        case 'rain':
            body.classList.add('rain');
            break;
        case 'snow':
            body.classList.add('snow');
            break;
        case 'fog':
            body.classList.add('fog');
            break;
        default:
            body.classList.add('default');

    }
}

// Making sure that the default city is always displayed

document.addEventListener('DOMContentLoaded', function () {
    const defaultCity = 'Lisbon';
    fetchWeather(defaultCity);
})