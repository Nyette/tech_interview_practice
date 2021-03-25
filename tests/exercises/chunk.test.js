const chunk = require('../../exercises/chunk');

test('The array is [1, 2, 3, 4, 5] and the size is 4', () => {
    expect(chunk([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]]);
});

test('The array is [1, 2, 3, 4, 5] and the size is 10', () => {
    expect(chunk([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
});
