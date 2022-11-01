//this and global scope

console.log(`this: ${this}`);
const whoIsThis = () => this;
console.log(`whoIsThis(): ${whoIsThis()}`);

console.log(`this: ${this}`);
const whoIsThisStrict = () => {
	('use strict');
	return this;
};
console.log(`whoIsThis(): ${whoIsThisStrict()}`);

//example scope to the this
const person = {
	name: 'Scarlett',
	saludar: function () {
		console.log(`Hello i am ${this.name}`);
	},
};

person.saludar();

const action = person.saludar;

action();

//this conext in class
function Person(name) {
	this.name = name;
}
Person.prototype.saludar = function () {
	console.log(`Me llamo ${this.name}`);
};

const scarlett = new Person('Scarlett');
scarlett.saludar();
