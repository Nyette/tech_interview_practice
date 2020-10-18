class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        let child = new Node(data);
        this.children.push(child);
    }

    remove(data) {
        this.children = this.children.filter(child => {
            return child.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            node.data = fn(node.data);
            arr.push(...node.children);
        }
    }
}

module.exports = { Node, Tree };
