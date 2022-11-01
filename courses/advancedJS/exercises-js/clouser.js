//IIFE (Inmediaty invoke function express)
(function () {
	let color = 'green';
	function printColor() {
		console.log(color);
	}
	printColor();
})();

//function return toher function

function makeColorPrinter(color) {
	let colorMessege = `The color is: ${color}`;
	return function () {
		console.log(colorMessege);
	};
}

let greenColorPrinter = makeColorPrinter('green');

//Other example

const makeCounter = (n) => {
	let count = n;
	return {
		increase: () => (count += 1),
		decrease: () => (count -= 1),
		getCount: () => count,
	};
};

let result = makeCounter(10);
console.log(result.getCount());
result.increase();
console.log(result.getCount());
result.increase();
console.log(result.getCount());
result.increase();
console.log(result.getCount());
result.decrease();
console.log(result.getCount());
result.decrease();
console.log(result.getCount());
result.increase();
console.log(result.getCount());
