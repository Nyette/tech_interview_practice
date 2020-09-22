// Return the node at the center of the linked list.
// RESTRICTIONS:
// Time Complexity: O(n)

const { Node, LinkedList } = require('./linkedList');

function midpoint(list) {
    let slow = list.head;
    let fast = list.head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

module.exports = midpoint;