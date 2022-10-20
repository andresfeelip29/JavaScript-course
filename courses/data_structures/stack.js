class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class MyDoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);
		this.head.prev = newNode;
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	insert(value, index) {
		if (index >= this.length) {
			return this.append(value);
		}
		const newNode = new Node(value);
		let element = this.head;
		for (let i = 0; i < index - 1; i++) {
			element = element.next;
		}
		const tempNode = element.next;
		newNode.prev = element;
		element.next = newNode;
		newNode.next = tempNode;
		this.length++;
		return this;
	}
}

let myLinkedList = new MyDoublyLinkedList(1);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.insert(2);
myLinkedList.prepend(0);
