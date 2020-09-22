// Prints the numbers from 1 to n.
// Multiples of 3 print "fizz", instead of the number.
// Multiples of 5 print "buzz", instead of the number.
// Multiples of both print "fizzbuzz".


function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}


module.exports = fizzBuzz;