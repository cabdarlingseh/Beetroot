    const API_Key = '699838e9c691cfc877855ed97ad10689';

    class WorldClock {
        constructor(city, timeZoneOffset) {
            this.city = city;
            this.timeZoneOffset = timeZoneOffset;
            this.clockElement = this.createClockElement();
            this.faceElement = this.createClockFace();
            this.clockElement.appendChild(this.faceElement);
            this.updateClock();
        }

        createClockElement() {
            const clock = document.createElement('div');
            clock.className = 'clock';

            const displayCity = document.createElement('p');
            displayCity.textContent = this.city;
            displayCity.className = 'city_name';
            clock.appendChild(displayCity);

            const displayDate = document.createElement('p');
            displayDate.className = 'date_display';
            displayDate.style.display = 'none';
            clock.appendChild(displayDate);

            const displayTime = document.createElement('p');
            displayTime.className = 'time_display';
            displayTime.style.display = 'none';
            clock.appendChild(displayTime);

            const show_time_button = document.createElement('button');
            show_time_button.textContent = 'Local Time';
            show_time_button.clasName = 'time_button'
            show_time_button.addEventListener('pointerdown', () => {
                this.getCurrentTime(displayDate);
                displayDate.style.display = 'block';
                this.faceElement.style.display = 'block';
            });
            clock.appendChild(show_time_button);

            const show_date_time_button = document.createElement('button');
            show_date_time_button.textContent = 'Local Date and Time';
            show_date_time_button.className = 'date_time_button'
            show_date_time_button.addEventListener('pointerdown', () => {
                this.getCurrentDateTime(displayTime)
                displayTime.style.display = 'block';
                this.faceElement.style.display = 'block';
            });
            clock.appendChild(show_date_time_button);

            const delete_clock = document.createElement('button');
            delete_clock.textContent = 'Delete the Clock';
            delete_clock.className = 'delete_button';
            delete_clock.addEventListener('pointerdown', () => {
                this.deleteClock();
            });
            clock.appendChild(delete_clock);


            return clock;
        }

        createClockFace() {
            const face = document.createElement('div');
            face.className = 'clock_face';
            face.style.display = 'none';

            const hourHand = document.createElement('div');
            hourHand.className = 'hour_hand';
            face.appendChild(hourHand);

            const minuteHand = document.createElement('div');
            minuteHand.className = 'minute_hand';
            face.appendChild(minuteHand);

            const secondHand = document.createElement('div');
            secondHand.className = 'second_hand';
            face.appendChild(secondHand);

            return face;
        }

        getLocalTime() {
            const currentUTC = Date.now() / 1000;
            const localTimeStamp = currentUTC + this.timeZoneOffset;
            const localDate = new Date(localTimeStamp * 1000);
            return localDate;
        }

        updateClock() {
            const hourHand = this.faceElement.querySelector('.hour_hand');
            const minuteHand = this.faceElement.querySelector('.minute_hand');
            const secondHand = this.faceElement.querySelector('.second_hand');

            let totalSeconds = 0;

            const update = () => {
                const localTime = this.getLocalTime();
                const hours = localTime.getHours() % 12;
                const minutes = localTime.getMinutes();
                const seconds = localTime.getSeconds();

                totalSeconds = totalSeconds + 1;

                // Calculating  rotation degrees
                const hourDeg = (360 / 12) * hours + (30 / 60) * minutes;
                const minuteDeg = (360 / 60) * minutes + (6 / 60) * seconds;
                // const secondDeg = (360 / 60) * totalSeconds;

                // Applying rotation to the clock hands
                hourHand.style.transform = `rotate(${hourDeg}deg)`;
                minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
                secondHand.style.transform = `rotate(${totalSeconds * 6}deg)`;
            };

            update();
            setInterval(update, 1000);
        }

        getCurrentTime(data) {
            const localDate = this.getLocalTime();
            const theTime = localDate.toLocaleTimeString('en-US');
            data.textContent = `Time: ${theTime}`;
            this.clockElement.classList.add('show-clock');
        }

        getCurrentDateTime(data) {
            const localDate = this.getLocalTime();
            const theDateTime = localDate.toLocaleString('en-US');
            data.textContent = `Date & Time: ${theDateTime}`;
            this.clockElement.classList.add('show-clock');
        }

        deleteClock() {
            this.clockElement.remove();
        }
    }

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
                    console.log('API Response:', response);
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

    function validateCity(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`;

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            });
    }


    function handleAddClock() {
        const cityInput = document.getElementById('city');
        const city = cityInput.value.trim() || 'Lisbon';

        if (!city || !isNaN(city)) {
            alert('Please enter a valid city name.');
            return
        }
        validateCity(city)
            .then(() => {
                return fetchTimeZone(city);
            })
            .then((timeZoneOffset) => {
                const clock = new WorldClock(city, timeZoneOffset);
                document.getElementById('clock_wall').appendChild(clock.clockElement);

                cityInput.value = '';
            })
            .catch(error => {
                alert('Error. Please Enter a City Name');
                return
            })
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