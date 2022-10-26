/**
 *
 * OBJECT REFERENCE
 *
 */

let car = {
	color: 'red',
	year: 2010,
	km: 200,
};

//Object copy reference on first object
let newCar = car;
console.log(car, newCar);
newCar.color = 'blue';
console.log(car, newCar);

//Copy the value and not the reference
let carNewValue = Object.assign({}, car);
carNewValue.color = 'pink';
console.log(car, carNewValue);

//Method Object.assingn() copy the first level ob object
let otherCar = {
	color: 'red',
	year: 2022,
	km: 200,
	owner: {
		name: 'Luis',
		age: 21,
	},
};

let otherNewcar = otherCar;
console.log(otherNewcar, otherCar);
otherNewcar.owner.name = 'Jhon';
console.log(otherNewcar, otherCar);

//For copy complete object in all levels use JSON.parse() and JSON.stringify()

let otherfabulousCar = {
	color: 'red',
	year: 2010,
	km: 200,
	owner: {
		name: 'George',
		age: 21,
	},
};

let newFabulousCar = JSON.parse(JSON.stringify(otherfabulousCar));
console.log(otherfabulousCar, newFabulousCar);
newFabulousCar.owner.name = 'Gabriel';
console.log(otherfabulousCar, newFabulousCar);


