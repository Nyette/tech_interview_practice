const anagrams = require('../exercises/anagrams');

test('rail safety, fairy tales', () => {
    expect(anagrams('rail safety', 'fairy tales')).toBeTruthy();
});

test('RAIL! SAFETY!, fairy tales', () => {
    expect(anagrams('RAIL! SAFETY!', 'fairy tales')).toBeTruthy();
});

test('Hi there, Bye there', () => {
    expect(anagrams('Hi there', 'Bye there')).toBeFalsy();
});

test('hello, helloz', () => {
    expect(anagrams('hello', 'helloz')).toBeFalsy();
});
