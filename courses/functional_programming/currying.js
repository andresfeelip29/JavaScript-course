/**
 * Currying usided the clouser principe
 *
 */

//Example

// not Currying
function sumThreeNumbers(a, b, c) {
	return a + b + c;
}

console.log(sumThreeNumbers(1, 2, 3)); // 6

//Currying
function sumThreeNumbers(a) {
	return function (b) {
		return function (c) {
			return a + b + c;
		};
	};
}

console.log(sumThreeNumbers(1)(2)(3)); // 6


//Currying with arrow fuction
let currying = (a) => (b) => (c) => a + b + c;

console.log(currying(1)(2)(3));
