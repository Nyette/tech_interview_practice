function maxChar(s) {
    let map = {};
    let arr = s.split('');
    for (let e of arr) {
        map[e] = map[e] + 1 || 1;
    }
    let maxCount = 1;
    let ans;
    for (const char in map) {
        if (map[char] > maxCount) {
            maxCount = map[char];
            ans = char;
        }
    }
    return ans;
}

module.exports = maxChar;