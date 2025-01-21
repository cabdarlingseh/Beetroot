const API_Key = '699838e9c691cfc877855ed97ad10689';

class WorldClock {
    constructor(city, timeZoneOffset) {
        this.city = city;
        this.timeZoneOffset = timeZoneOffset;
        this.clockElement = this.createClockElement();
        this.updateClock();
    }

    createClockElement() {
        const clock = document.createElement('div');
        clock.className = 'clock';

        const displayCity = document.createElement('div');
        displayCity.textContent = this.city;
        displayCity.className = 'city_name';
        clock.appendChild(displayCity);

        const displayDate = document.createElement('div');
        displayDate.className = 'date_display';
        clock.appendChild(displayDate);

        const displayTime = document.createElement('div');
        displayTime.className = 'time_display';
        clock.appendChild(displayTime);

        const show_date_button = document.createElement('button');
        show_date_button.textContent = 'Show Local Date';
        show_date_button.addEventListener('pointerdown', () => this.getCurrentDate(displayDate));
        clock.appendChild(show_date_button);

        const show_date_time_button = document.createElement('button');
        show_date_time_button.textContent = 'Show Local Date and Time';
        show_date_time_button.addEventListener('pointerdown', () => this.getCurrentDateTime(displayTime));
        clock.appendChild(show_date_time_button);

        const delete_clock = document.createElement('button');
        delete_clock.textContent = 'Delete the Clock';
        delete_clock.addEventListener('pointerdown', () => {
            this.deleteClock();
        });
        clock.appendChild(delete_clock);

        return clock;
    }

    getLocalTime() {
        const currentUTC = Date.now() / 1000;
        const localTimeStamp = currentUTC + this.timeZoneOffset;
        const localDate = new Date(localTimeStamp * 1000);
        return localDate;
    }

    getCurrentDate(data) {
        const localDate = this.getLocalTime();
        const theDate = localDate.toLocaleDateString('en-US');
        data.textContent = `Date: ${theDate}`;
    }

    getCurrentDateTime(data) {
        const localDate = this.getLocalTime();
        const theDateTime = localDate.toLocaleString('en-US');
        data.textContent = `Date & Time: ${theDateTime}`;
    }

    deleteClock() {
        this.clockElement.remove();
    }
}

const enter_button = document.querySelector('input[type="text"]');
enter_button.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();

    }
})

// Fetching the timezone

function fetchTimeZone(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                console.log('No Network Response')
            }
            return response.json();
        })
        .then(response => {
            if (response.cod === 200) {
                const timeZoneOffset = response.timezone;
                return timeZoneOffset;
            } else {
                console.log(`${response.message}` || 'Timezone not found');
            }
        })
        .catch(error => {
            console.log('Error fetching the Timezone')
        });
}

document.getElementById('add_clock').addEventListener('pointerdown', () => {
    handleAddClock();
});

document.getElementById('city').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleAddClock();
    }
});

function handleAddClock() {
    const cityInput = document.getElementById('city') || 'Lisbon';
    const city = cityInput.value.trim();

    if (!city) {
        alert('Please enter a city name.');
        return
    }

    fetchTimeZone(city)
        .then((timeZoneOffset) => {
            const clock = new WorldClock(city, timeZoneOffset);
            document.getElementById('clock_wall').appendChild(clock.clockElement);

            cityInput.value = '';
        })
        .catch(error => {
            alert('Error');
            return
        })
}