//Métodos
// Generator.prototype.next()
// Retorna el valor ofecido por la expresión yield
// Generator.prototype.return()
// Retorna el valor dado y finaliza el generador.
// Generator.prototype.throw()
// Lanzá un error al generador

//***************************************************************** */

function* idMaker() {
	var index = 0;
	while (true) yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

//***************************************************************** */
function* gen() {
	yield 1;
	yield 2;
	yield 3;
}

var g = gen(); // "Generator { }"

//***************************************************************** */
function* generator() {
	yield 1;
	yield* anotherGenerator(); //delega a la funcion anotherGenerator()
	yield 2;
}

function* anotherGenerator() {
	yield 5;
	yield 10;
	yield 15;
}

const gen = generator();

gen.next().value; // 1
gen.next().value; // 5
gen.next().value; // 10
gen.next().value; // 15
gen.next().value; // 2
