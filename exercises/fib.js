// This function should return the nth entry in the Fibonacci series.

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55] are the first few entries of the series.

// Solution #1: Iteration

// Time Complexity: O(n)

// function fib(n) {
//     let seq = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         let nextEntry = seq[i - 2] + seq[i - 1];
//         seq.push(nextEntry);
//     }
//     let nthEntry = seq[n];
//     return nthEntry;
// }

// Solution #2: Recursion

// Time Complexity: O(2^n)

// Exponential Time

// Memoization Can Speed Up Performance

function memoize(fn) {
    const cache = {};

    return function(...args) {

        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}


function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;