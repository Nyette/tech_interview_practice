function reverseInt(n) {
    let s = String(n);
    let arr = s.split('');
    let start;
    if (n < 0) {
        start = 1;
    } else {
        start = 0;
    }
    let end = arr.length - 1;
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    let reversedString = arr.join('');
    let reversedInt = Number(reversedString);
    return reversedInt;
}

module.exports = reverseInt;