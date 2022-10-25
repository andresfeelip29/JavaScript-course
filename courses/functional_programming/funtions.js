/**
 *
 * PURE FUNCTION EXAMPLE
 *
 */
const double = (x) => x * 2;

console.log(double(5));
console.log(double(3));

const isGreaterTham = (value, comparison) => value > comparison;
console.log(isGreaterTham(2, 5));
console.log(isGreaterTham(10, 4));

/**
 *
 * INPURE FUNCTION EXAMPLE
 *
 */
const time = () => new Date().toLocaleTimeString();

console.log(time());
console.log(time());
console.log(time());
