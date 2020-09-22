// LIFO
// Last In, First Out

class Stack {

    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.push(item);
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }

}

module.exports = Stack;