/***
 *
 * Reduce is a high order function to reduce a set of data based on an aggregate function.
 */

const array1 = [1, 2, 3, 4, 5, 6, 7];

//Example

//Using imperative programming

let data = 0;
for (let i = 0; i < array1.length; i++) {
	data += array1[i];
}

console.log(data);

//Using fuctional programming with reduce()
const result2 = array1.reduce(function (previousValue, currentValue) {
	return previousValue + currentValue;
});

console.log(result2);

//Using fuctional programming with arrow fuction and reduce()
const result = array1.reduce((x, y) => x + y);

console.log(result);
