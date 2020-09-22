// Capitalize the first letter of each word in a string.

function capitalize(s) {
    let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i - 1] === ' ') {
            arr[i] = arr[i].toUpperCase();
        }
    }
    let capitalized = arr.join('');
    return capitalized;
}

module.exports = capitalize;
