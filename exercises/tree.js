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
}

module.exports = { Node, Tree };
