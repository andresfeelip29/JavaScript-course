/**
 * Clouser are functions that return other functions and remember their scope.
 *
 */

//Example clouser

const buildSum = (a) => (b) => a + b;

const addFive = buildSum(5);
console.log(addFive(5));
console.log(addFive(5));
