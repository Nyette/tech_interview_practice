const vowels = require('../exercises/vowels');

test('Why?', () => {
    expect(vowels('Why?')).toBe(0);
});

test('Hi, there!', () => {
    expect(vowels('Hi, there!')).toBe(3);
});

test('Why do you ask?', () => {
    expect(vowels('Why do you ask?')).toBe(4);
});