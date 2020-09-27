const { Node, Tree } = require('../exercises/tree');

describe('Node', () => {
    
    test('Create a node', () => {
        let n = new Node('a');
        expect(n).toBeInstanceOf(Node);
        expect(n.children.length).toEqual(0);
        expect(n.data).toEqual('a');
    });

    test('Add child nodes', () => {
        let n = new Node(123);
        n.add(456);
        expect(n.children.length).toEqual(1);
        expect(n.children[0].data).toEqual(456);
    });

    test('Remove child nodes', () => {
        let n = new Node(123);
        n.add(456);
        n.add(456);
        n.add(789);
        n.add(456);
        n.remove(456);
        expect(n.children.length).toEqual(1);
        expect(n.children[0].data).toEqual(789);
    });

});

describe('Tree', () => {

    test('Create a tree', () => {
        let t = new Tree();
        expect(t).toBeInstanceOf(Tree);
        expect(t.root).toBeNull();
    });

});