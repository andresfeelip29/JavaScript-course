//boolean
let muted: boolean = true;
muted = false;
//muted = "any string";  error

//Numbers
let numerator: number = 2;
let denominator: number = 45;
let result = numerator / denominator;

//string

let names: string = 'Andrew';
let sayHello = `My Name is ${names}`;

console.log(sayHello);

//Arrays

let people: string[] = [];
people = ['Carlos', 'Jonh', 'Michael'];
people.push('3');

let peopleAndNumber: Array<string | number> = [];
peopleAndNumber.push('Ricardo');
peopleAndNumber.push(9100);

//Enum
enum Color {
	Red = 'Red',
	Blue = 'Blue',
	Green = 'Green',
}

let colorFavortie: Color = Color.Blue;
console.log(colorFavortie);

//any

let joker: any = 'Joker';

joker = { type: 'Wildcard' };

//Object

let someObjet: object = { name: 'William' };
