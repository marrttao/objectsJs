car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    colors: ['red', 'blue', 'green'],
    getCarInfo: function() {
        return this.brand + ' ' + this.model + ' ' + this.year;
    }
}

console.log(car.getCarInfo());
document.getElementById('result').innerHTML = car.getCarInfo();