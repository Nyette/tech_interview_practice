class Node {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

}

class LinkedList {

    constructor() {
        this.head = null;
    }

    getAt(i) {
        let counter = 0;
        let current = this.head;
        while (current) {
            if (i === counter) {
                return current;
            } else {
                counter++;
                current = current.next;
            }
        }
        return null;
    }

    removeAt(i) {
        let previous = this.getAt(i - 1);
        let current = this.getAt(i);
        let next = this.getAt(i + 1);
        if (previous) {
            if (next) {
                previous.next = next;
            } else {
                previous.next = null;
            }
        } else {
            if (current) {
                this.head = this.head.next;
            }
        }
    }

    insertAt(i, data) {
        let shifted = this.getAt(i);
        let previous = this.getAt(i - 1);
        if (shifted) {
            if (previous) {
                previous.next = new Node(data, shifted);
            } else {
                this.head = new Node(data, this.head);
            }
        } else {
            let last = this.head;
            if (!last) {
                this.head = new Node(data);
            } else {
                while (last.next) {
                    last = last.next;
                }
                last.next = new Node(data);
            }
        }
    }

}

module.exports = { Node, LinkedList };