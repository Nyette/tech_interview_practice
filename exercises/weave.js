// This function accepts 2 queues as arguments.
// The third queue should contain the ALTERNATING contents of both queues.
// The function should be able to handle queues of different lengths.
// Only use the add, remove, and peek functions.


const Queue = require('./queue');

function weave(q1, q2) {
    let q3 = new Queue();
    while (q1.peek() || q2.peek()) {
        if (q1.peek()) {
            q3.add(q1.remove());
        }
        if (q2.peek()) {
            q3.add(q2.remove());
        }
    }
    return q3;
}

module.exports = weave;