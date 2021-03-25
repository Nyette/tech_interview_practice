const maxChar = require('../../exercises/maxChar');

test('maxChar(abcccccd) should return c', () => {
    expect(maxChar('abcccccd')).toBe('c');
});

test('maxChar(apple 12111111) should return 1', () => {
    expect(maxChar('apple 12111111')).toBe('1');
});