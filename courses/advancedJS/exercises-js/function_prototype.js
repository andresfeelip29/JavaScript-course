//Method for set conext on call function

//fuction out any context

function greet() {
	console.log(`Say Hello, I am ${this.name} ${this.lastname}`);
}

const jhon = {
	name: 'Jhon',
	lastname: 'Doe',
};

//with call we establish a context for the function
greet.call(jhon);

function walk(meters, address) {
	console.log(`${this.name} walking ${meters} subway to ${address} `);
}

walk.call(jhon, 46, 'east');

walk.apply(jhon, [100, 'south']);

const violet = {
	name: 'Violet',
	lastname: 'Doe',
};

const violetWalk = walk.bind(violet);
violetWalk(1000, 'east');
