const compose =
	(...functions) =>
	(data) =>
		functions.reduceRight((value, func) => func(value), data);

/**
 *
 * Using JQuery
 *
 */

// let description = $('#description');
// let calories = $('#calories');
// let carbs = $('#carbs');
// let protein = $('#protein');

// description.keypress(() => {
// 	description.removeClass('is-invalid');
// });

// calories.keypress(() => {
// 	calories.removeClass('is-invalid');
// });

// carbs.keypress(() => {
// 	carbs.removeClass('is-invalid');
// });

// protein.keypress(() => {
// 	protein.removeClass('is-invalid');
// });

// const validateInputs = () => {
// 	description.val() ? '' : description.addClass('is-invalid');
// 	calories.val() ? '' : calories.addClass('is-invalid');
// 	carbs.val() ? '' : carbs.addClass('is-invalid');
// 	protein.val() ? '' : protein.addClass('is-invalid');

// 	if (description.val() && calories.val() && carbs.val() && protein.val())
// 		console.log('Agregar item a lista');
// };

/***
 *
 * Using VanillaJS
 *
 * **/

let description = document.getElementById('description');
let calories = document.getElementById('calories');
let carbs = document.getElementById('carbs');
let protein = document.getElementById('protein');

let list = [];

const attrsToString = (obj = {}) => {
	const keys = Object.keys(obj);
	const attrs = [];

	for (let i = 0; i < keys.length; i++) {
		let attr = keys[i];
		attrs.push(`${attr}=“${obj[attr]}"`);
	}

	const string = attrs.join(' ');

	return string;
};

const tagAttrs =
	(obj) =>
	(content = '') =>
		`<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`;

const tag = (t) => {
	if (typeof t === 'string') {
		return tagAttrs({ tag: t });
	}
	return tagAttrs(t);
};

const validateInputs = () => {
	description.value ? '' : description.classList.add('is-invalid');
	calories.value ? '' : calories.classList.add('is-invalid');
	carbs.value ? '' : carbs.classList.add('is-invalid');
	protein.value ? '' : protein.classList.add('is-invalid');

	if (description.value && calories.value && carbs.value && protein.value) {
		add();
	}
};

description.addEventListener('keydown', () => description.classList.remove('is-invalid'));
calories.addEventListener('keydown', () => calories.classList.remove('is-invalid'));
carbs.addEventListener('keydown', () => carbs.classList.remove('is-invalid'));
protein.addEventListener('keydown', () => protein.classList.remove('is-invalid'));

const add = () => {
	const newItem = {
		description: description.value,
		calories: calories.value,
		carbs: carbs.value,
		protein: protein.value,
	};

	list.push(newItem);
	clearInputs();
	console.log(list);
};

const clearInputs = () => {
	description.value = '';
	calories.value = '';
	carbs.value = '';
	protein.value = '';
};
