/*Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:
A method that displays the car info 
A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break. */

const cars = {
    manufacturer: 'Mercedes',
    model: 'Type A',
    releaseYear: 1994,
    averageSpeed: 140,
    carInfo() {
        console.log(`Manufacurer name: ${this.manufacturer}.`);
        console.log(`Model name: ${this.model}.`);
        console.log(`Year Released: ${this.releaseYear}.`);
        console.log(`Average Speed: ${this.averageSpeed}.`);
    },
    timeForDistance(distance) {
        const totalTimeWithoutBreaks = distance / this.averageSpeed;
        const breaks = Math.floor(totalTimeWithoutBreaks / 4);
        const totalTimeForDistance = totalTimeWithoutBreaks + breaks;

        console.log(`The total time taken to travel the distance of ${distance} km is ${totalTimeForDistance.toFixed(2)} hours with ${breaks} breaks.`);
    }
}

cars.carInfo();
cars.timeForDistance(500);