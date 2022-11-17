//Using prototype inheritance

function Hero(name) {
	this.name = name;
}

Hero.prototype.saludar = function () {
	console.log(`New: ${this.name}.`);
};

const zelda = new Hero('Zelda');

console.log('Name:', zelda.name);
console.log('Saludar:', zelda.saludar);
console.log('toString:', zelda.toString());

//hasOwnProperty - (we check which object has the property)
console.log('hasOwnProperty:', zelda.hasOwnProperty('name'));

Hero.prototype.fight = function () {
	console.log(`FIGT!`);
};

console.log('Fight:', zelda.fight);
