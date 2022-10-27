/***
 *
 * forEach is a high order function for running an array
 */

const array1 = [1, 2, 3];
const array2 = [];

//Example

//Using imperative programming
for (let i = 0; i < array1.length; i++) {
	console.log(array1[i] * 2);
}

//Using fuctional programming with forEach()
array1.forEach(function (x) {
	console.log(x * 2);
});

//Using fuctional programming with arrow fuction and forEach()
array1.map((x) => console.log(x * 2));
