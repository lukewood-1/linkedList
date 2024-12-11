export class LinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	append(value) {
		const newNode = new Node(value);
		
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.size++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);

		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.size++;
		return this
	}

	at(index) {
		if(!this.head || index < 0 || index > this.size-1) return undefined;

		let current = this.head;
		let number = 0;
			while(number < index){
				current = current.next;
				number++;
			}
		return current
	}

	pop(){
		let newTail = this.at(this.size-2);
		let popped = newTail.next;
		this.tail = newTail;
		newTail.next = null;
		
		this.size--;
		return popped;
	}

	contains(value){
		let current = this.head;
		while(current){
			if(current.value === value){
				return true;
			} else current = current.next;
		}
		return false
	}

	find(value){
		let count = 0;
		let current = this.head;
		while(current){
			if(current.value === value){
				return count
			} else {
				count++;
				current = current.next;
			}
		}
		return null;
	}

	toString(){
		let result = '';
		let current = this.head;
		while(current){
			result += `( ${current.value} ) -> `;
			current = current.next;
		}
		result += 'null';
		return result;
	}
	
	insertAt(index, value){
		if(index < 0 || index > this.size-1) return false;
		if(index === 0) {
			this.prepend(value);
			return true;
		}
		if(index === this.size-1){
			this.append(value);
			return true;
		}

		let newNode = new Node(value),
				number = 0,
				preTarget = this.at(index-1);
		
		newNode.next = preTarget.next;
		preTarget.next = newNode;

		this.size++;
		return true;
	}

	removeAt(index){
		if(index < 0 || index > this.size -1) return false

		let preTarget = this.at(index-1);
		let removed = preTarget.next;
		preTarget.next = removed.next;

		this.size--;
		return removed;
	}
}

export class Node{
	constructor(val){
		this.value = val;
		this.next = null;
	}
}
