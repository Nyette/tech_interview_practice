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

    test('Traverse BF', () => {
        let a = new Node(5);
        a.add(10);
        a.add(15);
        let b = a.children[0];
        let c = a.children[1];
        let t = new Tree();
        t.root = a;
        function double(num) {
            return num * 2;
        }
        t.traverseBF(double);
        expect(a.data).toEqual(10);
        expect(b.data).toEqual(20);
        expect(c.data).toEqual(30);
    });

    test('Traverse DF', () => {
        let a = new Node(5);
        a.add(10);
        a.add(15);
        let b = a.children[0];
        let c = a.children[1];
        let t = new Tree();
        t.root = a;
        function double(num) {
            return num * 2;
        }
        t.traverseDF(double);
        expect(a.data).toEqual(10);
        expect(b.data).toEqual(20);
        expect(c.data).toEqual(30);
    });

});