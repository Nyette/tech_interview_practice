const palindrome = require('../exercises/palindrome');

test('palindrome(cat) should return false', () => {
    expect(palindrome('cat')).toBeFalsy();
});

test('palindrome(abba) should return true', () => {
    expect(palindrome('abba')).toBeTruthy();
});

test('An empty string is a palindrome, so it should return true', () => {
    expect(palindrome('')).toBeTruthy();
});

test('A string one character long is already a palindrome, so it should return true', () => {
    expect(palindrome('a')).toBeTruthy();
});
