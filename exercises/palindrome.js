function palindrome(s) {
    if (s.length <= 1) {
        return true;
    } else {
        let arr = s.split('');
        let start = 0;
        let end = arr.length - 1;
        while (start < end) {
            if (arr[start] === arr[end]) {
                start++;
                end--;
            } else {
                return false;
            }
        }
        return true;
    }
}

module.exports = palindrome;