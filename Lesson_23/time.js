/*Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object: 
A method for displaying the time. 
A method for changing the time by a given amount of seconds. 
A method for changing the time by a given amount of minutes.  
A method for changing the time by a given amount of hours. 
 

Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75». */

const time = {
    hours: 23,
    minutes: 45,
    seconds: 30,
    displayTime() {
        const timeFormat = (value) => (value < 10 ? '0' + value : value);
        console.log(`${timeFormat(this.hours)}:${timeFormat(this.minutes)}:${timeFormat(this.seconds)}`);
    },

    addSeconds(second) {
        this.seconds += second;
        while (this.seconds >= 60) {
            this.seconds -= 60;
            this.minutes += 1;
        }
        while (this.minutes >= 60) {
            this.minutes -= 60;
            this.hours += 1;
        }

        this.hours %= 24;

        const timeFormat = (value) => (value < 10 ? '0' + value : value);
        console.log(`${timeFormat(this.hours)}:${timeFormat(this.minutes)}:${timeFormat(this.seconds)}`);
    },

    addMinutes(minute) {
        this.minutes += minute;
        while (this.minutes >= 60) {
            this.minutes -= 60;
            this.hours += 1;
        }

        this.hours %= 24;

        const timeFormat = (value) => (value < 10 ? '0' + value : value);
        console.log(`${timeFormat(this.hours)}:${timeFormat(this.minutes)}:${timeFormat(this.seconds)}`);
    },

    addHours(hour) {
        this.hours = (this.hours + hour) % 24;
        if (this.hours < 0) this.hours += 24;

        const timeFormat = (value) => (value < 10 ? '0' + value : value);
        console.log(`${timeFormat(this.hours)}:${timeFormat(this.minutes)}:${timeFormat(this.seconds)}`);
    }
}

time.displayTime();
time.addSeconds(45);
time.addMinutes(65);
time.addHours(5);