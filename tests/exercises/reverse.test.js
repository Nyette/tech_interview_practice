const reverse = require('../../exercises/reverse');

test('reverse(cat) => tac', () => {
    expect(reverse('cat')).toBe('tac');
});

test('Reversing an empty string should return an empty string', () => {
    expect(reverse('')).toBe('');
});

test('reverse(a) => a', () => {
    expect(reverse('a')).toBe('a');
});
