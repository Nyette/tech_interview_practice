const fib = require('../exercises/fib');

test('fib(4)', () => {
    expect(fib(4)).toBe(3);
});

test('fib(10)', () => {
    expect(fib(10)).toBe(55);
});
