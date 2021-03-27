const Queue = require('../../data_structures/queue');

test('Creating a queue', () => {
    const q = new Queue();
    expect(q).toBeInstanceOf(Queue);
});

test('Adding to a queue', () => {
    const q = new Queue();
    q.add(1);
    expect(q.data).toEqual([1]);
});

test('Removing from a queue', () => {
    const q = new Queue();
    q.add(2);
    q.add(1);
    q.remove();
    expect(q.data).toEqual([1]);
});

test('Maintaining the order of elements', () => {
    const q = new Queue();
    q.add(3);
    q.add(2);
    q.add(1);
    expect(q.data).toEqual([1, 2, 3]);
});