const Stack = require('./stack');

class Queue {

    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(item) {
        this.first.add(item);
    }
    
    remove() {
        while (this.first.peek()) {
            this.second.add(this.first.remove());
        }
        const item = this.second.remove();
        while (this.second.peek()) {
            this.first.add(this.second.remove());
        }
        return item;
    }

    peek() {
        while (this.first.peek()) {
            this.second.add(this.first.remove());
        }
        const item = this.second.peek();
        while (this.second.peek()) {
            this.first.add(this.second.remove());
        }
        return item;
    }
    
}

module.exports = Queue;