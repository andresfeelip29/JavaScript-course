class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek() {
		return this.first;
	}
	pop() {
		const getout = this.first;
		this.first = this.first.next;
		getout.next = null;
		this.length--;
		return getout;
	}
	push(value) {
		const element = new Node(value);
		if (this.length == 0) {
			this.first = element;
			this.last = element;
		} else {
			this.last.next = element;
			this.last = element;
		}
		this.length++;
		return this;
	}
}

const myQueue = new queue();
myQueue.push(2);
myQueue.push(32);
myQueue.push(43);
myQueue.push(3);
myQueue.push(4);
myQueue.push(1);
myQueue.push(54);
myQueue.push(12);
myQueue.push(44);
myQueue.push(7);
myQueue.push(6);

//show elements
myQueue.peek();
myQueue.pop();
