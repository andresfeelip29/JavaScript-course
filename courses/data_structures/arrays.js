// Array declaration by extension
const arrayExample = ['John Doe', 'Scarlett Krust', 'Andrew Silva'];

//Add element to array
arrayExample.push('Michael Doe');

//Implement class Array
class MyArry {
	constructor() {
		this.length = 0;
		this.data = {};
	}
	//Method for get element by index
	getByIndex(index) {
		return this.data[index];
	}

	//Add element on last
	add(element) {
		this.data[this.length] = element;
		this.length++;
		return this.data;
	}

	//Delete the last element
	pop() {
		const lastElement = this.data[this.length - 1];
		delete this.data[this.length];
		this.length--;
		return lastElement;
	}

	//Delete element by index
	delete(index) {
		const element = this.data[index];
		this.shitfIndex(index);
		return element;
	}

	//Method for movement element to index posicion and delet de last blank position
	shitfIndex(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const myArray = new MyArry();

myArray.add('Jhon Doe');
myArray.add('Andrew Silva');
console.log(myArray);
console.log('Array position 0 is: ', myArray.getByIndex(0));
