// Divide the elements of the provided array into subarrays, 
// which have lengths that are, at most, equal to the specified size.

// Solution #1

// function chunk(arr, size) {
//     let chunked = [];
//     for (let element of arr) {
//         let last = chunked[chunked.length - 1];
//         if (!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }

// Solution #2

function chunk(arr, size) {
    let chunks = [];
    let i = 0;
    while (i < arr.length) {
        let subArr = arr.slice(i, i + size);
        chunks.push(subArr);
        i += size;
    }
    return chunks;
}

module.exports = chunk;