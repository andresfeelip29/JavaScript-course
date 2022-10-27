/***
 *
 * Some is a high order function to checks if any element meets the established condition
 */

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Example

//Using imperative programming
let result = false;
for (let i = 0; i < array1.length; i++) {
	if (array1[i] === 4) {
		result = true;
		break;
	}
}

console.log(result);

//Using fuctional programming with reduce()
const result2 = array1.some(function (x) {
	return x === 4;
});

console.log(result2);

//Using fuctional programming with arrow fuction and reduce()
const result3 = array1.some((x) => x === 4);

console.log(result3);
