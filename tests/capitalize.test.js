const capitalize = require('../exercises/capitalize');

test('a lazy fox', () => {
    expect(capitalize('a lazy fox')).toBe('A Lazy Fox');
});

test('look, it is working!', () => {
    expect(capitalize('look, it is working!')).toBe('Look, It Is Working!');
});