function anagrams(s1, s2) {
    
    function buildCharMap(s) {
        let charMap = {};
        for (let char of s.toLowerCase()) {
            if (char >= "a" && char <= "z") {
                charMap[char] = charMap[char] + 1 || 1;
            }
        }
        return charMap;
    }
    
    let map1 = buildCharMap(s1);

    let map2 = buildCharMap(s2);

    if (Object.keys(map1).length !== Object.keys(map2).length) {
        return false;
    }

    for (let char in map1) {
        if (map1[char] !== map2[char]) {
            return false;
        }
    }

    return true;

}

module.exports = anagrams;