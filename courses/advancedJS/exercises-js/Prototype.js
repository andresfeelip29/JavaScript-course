//Using prototype

function Hero(name) {
	this.name = name;
}

Hero.prototype.saludar() = function (){
    console.log(`New: ${this.name}`);
}
const hero = new Heroe('Zelda');
heroe.saludar();

const hero2 = new Heroe('Link');
heroe2.saludar();


//Using class
class Heroe {
	constructor(name) {
		this.name = name;
	}

	saludar = () => console.log(`New: ${this.name}`);
}

const heroe = new Heroe('Zelda');
heroe.saludar();

const heroe2 = new Heroe('Link');
heroe2.saludar();
