// Print a step with n levels, using the # character.
// The step has spaces on the right side.

function steps(n) {
    let char = '#';
    let space = ' ';
    for (let i = 1; i <= n; i++) {
        let step = char.repeat(i) + space.repeat(n - i);
        console.log(step);
    }
}

module.exports = steps;