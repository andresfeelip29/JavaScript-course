/***
 *
 * Map is a high order function to modify an array without changing its original state.
 */

const array1 = [1, 2, 3];
const array2 = [];

//Example

//Using imperative programming
for (let i = 0; i < array1.length; i++) {
	array2.push(array1[i] * 2);
}

console.log(array2);

//Using fuctional programming with map()
const array3 = array1.map(function (x) {
	return x * 2;
});

console.log(array3);

//Using fuctional programming with arrow fuction and map()
const array4 = array1.map((x) => x * 2);

console.log(array4);
