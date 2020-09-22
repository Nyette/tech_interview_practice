const { Node, LinkedList } = require('../exercises/linkedList');

describe('getAt', () => {

    test('works on an empty list', () => {
        let l = new LinkedList();
        expect(l.getAt(0)).toBeNull();
    });

    test('works when i is out of bounds', () => {
        let l = new LinkedList();
        expect(l.getAt(5)).toBeNull();
    });

    test('works on a list that has, at least, 1 node', () => {
        let l = new LinkedList();
        l.insertAt(0, 'a');
        l.insertAt(1, 'b');
        expect(l.size()).toEqual(2);
        expect(l.getAt(0).data).toEqual('a');
        expect(l.getAt(1).data).toEqual('b');
    });

});

describe('removeAt', () => {

    test('works on an empty list', () => {
        let l = new LinkedList();
        l.removeAt(5);
        expect(l.head).toBeNull();
    });

    test('works on a list that has 1 node', () => {
        let l = new LinkedList();
        l.insertAt(0, 'a');
        l.removeAt(0);
        expect(l.head).toBeNull();
    });

    test('works when i is out of bounds', () => {
        let l = new LinkedList();
        l.insertAt(0, 'a');
        l.removeAt(2);
        expect(l.size()).toEqual(1);
        expect(l.head.data).toEqual('a');
    });

    test('works on a list that has, at least, 1 node', () => {
        let l = new LinkedList();
        l.insertAt(0, 'a');
        l.insertAt(1, 'b');
        l.removeAt(0);
        expect(l.size()).toEqual(1);
        expect(l.head.data).toEqual('b');
    });

});

describe('insertAt', () => {

    test('works on an empty list', () => {
        let l = new LinkedList();
        l.insertAt(5, 'a');
        expect(l.head.data).toEqual('a');
    });

    test('works on a list that has, at least, 1 node', () => {
        let l = new LinkedList();
        l.insertAt(0, 'a');
        l.insertAt(1, 'b');
        l.insertAt(2, 'd');
        l.insertAt(2, 'c');
        expect(l.size()).toEqual(4);
        expect(l.head.data).toEqual('a');
        expect(l.getAt(1).data).toEqual('b');
        expect(l.getAt(2).data).toEqual('c');
        expect(l.getAt(3).data).toEqual('d');
    });

    test('works when i is out of bounds', () => {
        let l = new LinkedList();
        l.insertAt(0, 'a');
        l.insertAt(1, 'b');
        l.insertAt(5, 'c');
        expect(l.size()).toEqual(3);
        expect(l.head.data).toEqual('a');
        expect(l.getAt(1).data).toEqual('b');
        expect(l.getAt(2).data).toEqual('c');
    });

});
