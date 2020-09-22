// Print a pyramid shape with n levels, using the # character.

function pyramid(n) {
    
    let char = '#';

    let space = ' ';
    
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += char;
            } else {
                level += space;
            }
        }
        console.log(level);
    }
}


module.exports = pyramid;
