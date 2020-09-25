// Return the nth node from the tail of the list.

function fromLast(list, n) {
    if (!list.head) {
        return null;
    } else {
        let slow = list.head;
        let fast = list.head;
        while (n > 0) {
            fast = fast.next;
            n--;
        }
        while (fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }
}

module.exports = fromLast;