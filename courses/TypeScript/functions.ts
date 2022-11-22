//Basic function declarate
const add = (a: number, b: number): number => a + b;

const sum = add(1, 2);

//Function retunr other fuction
const createAdder =
	(a: number): ((number) => number) =>
	(b: number) =>
		a + b;

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

//Fuction with param optional

const fullName = (firstName: string, lastName: string = 'Smith'): string =>
	`${firstName} ${lastName}`;

const smith = fullName('Agent');

const fullName2 = (firstName: string, lastName?: string): string => `${firstName} ${lastName}`;

const richard = fullName('Andres');
