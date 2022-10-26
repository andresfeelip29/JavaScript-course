/**
 *  shared state refers to the fact that different functions
 *  share the state of a variable and when this variable changes
 *  then the behavior of the methods changes,
 *  therefore the concept of immutability applies.
 *
 */

//Example 1

const a = {
	value: 2,
};

//The two fuction modify the value of a and no copy de object with other reference
const addOne = () => (a.value += 1);
const timeTwo = () => (a.value *= 2);

addOne();
timeTwo();
console.log(a.value);

timeTwo();
addOne();
console.log();

//Example 2

const b = {
	value: 3,
};

const addTree = (b) => Object.assign({}, b, { value: b.value + 1 });
const addFour = (b) => Object.assign({}, b, { value: b.value * 2 });

//Original value of object b have not change
console.log(addTree(b));
console.log(b.value);
console.log(addFour(b));
console.log(b.value);
