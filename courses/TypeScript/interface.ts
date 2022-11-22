//The interface is declare a class

enum BasicColor {
	Red = 'Red',
	Blue = 'Blue',
}

interface Rectangulo {
	width: number;
	height: number;
	color?: BasicColor;
}

let rect: Rectangulo = {
	height: 10,
	width: 5,
	color: BasicColor.Red,
};

const area = (r: Rectangulo) => r.width * r.height;

const areaRect = area(rect);
console.log(areaRect);

rect.toString = () => (this.color ? `Un Rectangulo ${this.color}` : `Un Rectangulo`);

console.log(rect.toString());
