/***
 * Mutability and Immutability
 *
 */

//Mutability return the list with same reference
const addToList = (list, item, quantity) => {
	return list.push({
		quantity,
		item,
	});
};

//Immutability, return new same list with new reference
const addToListI = (list, item, quantity) => {
	const newList = JSON.parse(JSON.stringify(list));
	return newList.push({
		quantity,
		item,
	});
};
