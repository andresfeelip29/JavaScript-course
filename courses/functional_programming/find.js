/***
 *
 * Find is a high order function to find the first element that complies with the condition
 */

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Example

//Using imperative programming
let element;
for (let i = 0; i < array1.length; i++) {
	if (array1[i] > 8) {
		element = array1[i];
		break;
	}
}

console.log(element);

//Using fuctional programming with reduce()
const element2 = array1.find(function (x) {
	return x > 8;
});

console.log(element2);

//Using fuctional programming with arrow fuction and reduce()
const element3 = array1.find((x) => x > 8);

console.log(element3);
