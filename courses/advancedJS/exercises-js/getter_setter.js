let person = {
	name: 'Miguel',
	last_name: 'Soler',
	age: 28,
	languages: ['js', 'css', 'react'],
	get skills() {
		return this.languages;
	},
};

console.log(person.skills);

let person2 = {
	name: 'Miguel',
	last_name: 'Soler',
	age: 28,
	languages: [],
	set skills(skills) {
		this.languages = skills;
	},
};

person2.skills = ['ruby', 'rails', 'nodejs'];

console.log(person2.languages);
