const isLeap = require('../../exercises/isLeap');

test('2000 is a leap year', () => {
    expect(isLeap(2000)).toBeTruthy();
});

test('2400 is a leap year', () => {
    expect(isLeap(2400)).toBeTruthy();
});

test('1800 is not a leap year', () => {
    expect(isLeap(1800)).toBeFalsy();
});

test('2100 is not a leap year', () => {
    expect(isLeap(2100)).toBeFalsy();
});
