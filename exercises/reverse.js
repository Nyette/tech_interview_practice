function reverse(s) {
    if (s.length <= 1) {
        return s;
    } else {
        let arr = s.split('');
        let start = 0;
        let end = arr.length - 1;
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        let reversed = arr.join('');
        return reversed;
    }
}

module.exports = reverse;