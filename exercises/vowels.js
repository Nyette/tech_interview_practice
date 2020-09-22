// Solution #1

// function vowels(s) {
//     let vowelCount = 0;
//     const target = ['a', 'e', 'i', 'o', 'u'];
//     for (let char of s.toLowerCase()) {
//         if (target.includes(char)) {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }

// Solution #2

function vowels(s) {
    let exp = /[aeiou]/ig;
    let matches = s.match(exp);
    return matches ? matches.length : 0;
}

module.exports = vowels;