/***
 *
 * Filter is a high order function to filter data in an array.
 */

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [];

//Example

//Using imperative programming
for (let i = 0; i < array1.length; i++) {
	if (array1[i] % 2 == 0) {
		array2.push(array1[i]);
	}
}

console.log(array2);

//Using fuctional programming with filter()
const array3 = array1.filter(function (x) {
	return x % 2 == 0;
});

console.log(array3);

//Using fuctional programming with arrow fuction and filter()
const array4 = array1.filter((x) => x % 2 == 0);

console.log(array4);
