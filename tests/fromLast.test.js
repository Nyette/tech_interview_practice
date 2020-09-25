const { Node, LinkedList } = require('../exercises/linkedList');
const fromLast = require('../exercises/fromLast');

describe('fromLast', () => {

    test('returns the correct node when the list has, at least, 1 node', () => {
        let l = new LinkedList();
        l.insertAt(0, 'a');
        l.insertAt(1, 'b');
        l.insertAt(2, 'c');
        l.insertAt(3, 'd');
        expect(fromLast(l, 2).data).toEqual('b');
    });
    
    test('does not crash when the list is empty', () => {
        let l = new LinkedList();
        expect(fromLast(l, 2)).toBeNull();
    });

});
