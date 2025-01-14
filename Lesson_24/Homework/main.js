const API_Key = '699838e9c691cfc877855ed97ad10689';


function fetchWeather(cityName) {
    const URL = `https://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${API_Key}&units=metric`;

    fetch(URL)
        .then(res => res.json())
        .then(response => {
            const theWeather = response?.list[0].main;

            const card = document.querySelector('.weather_card');

            if (card) {
                card.style.display = 'block';
            }
            currentWeather(theWeather);
            feelsLike(theWeather);
            humidity(theWeather);
            max_temp(theWeather);
            min_temp(theWeather);
            // console.log(theWeather);


        })
}

function searchWeather() {
    const cityName = document.querySelector('#city').value || 'Lisbon';

    fetchWeather(cityName);
    getWeatherConditions(cityName);

    const placeName = document.querySelector('.cityName');
    placeName.textContent = cityName;


}

const enter_button = document.querySelector('input[type ="text"]');

enter_button.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchWeather();
    };
})

function currentWeather(data) {
    const temp_wrapper = document.querySelector('.temperature');
    temp_wrapper.textContent = Math.round(data.temp);
    // console.log(temp_wrapper);
}

function feelsLike(data) {
    const feeling = document.querySelector('.feelslike');
    feeling.textContent = Math.round(data.feels_like);
}

function humidity(data) {
    const humid = document.querySelector('.humidity');
    humid.textContent = Math.round(data.humidity);
}

function max_temp(data) {
    const max_temperature = document.querySelector('.max_temp');
    max_temperature.textContent = Math.round(data.temp_max);
}

function min_temp(data) {
    const min_temperature = document.querySelector('.min_temp');
    min_temperature.textContent = Math.round(data.temp_min);
}

function getWeatherConditions(cityName) {
    const URL = `https://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${API_Key}&units=metric`;

    fetch(URL)
        .then(res => res.json())
        .then(response => {
            const mainWeather = response?.list[0].weather[0].main.toLowerCase();

            changeBackground(mainWeather);
            // console.log(mainWeather);

            const conditions = document.querySelector('.conditions');
            conditions.textContent = mainWeather;

        })

}

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