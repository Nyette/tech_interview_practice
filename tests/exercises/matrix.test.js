const matrix = require('../../exercises/matrix');

test('matrix(2)', () => {
    expect(matrix(2)).toStrictEqual([[1, 2], [4, 3]]);
});

test('matrix(3)', () => {
    expect(matrix(3)).toStrictEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
});
