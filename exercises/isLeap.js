// The year must be evenly divisible by 4.
// If the year can also be evenly divided by 100, it is not a leap year.
// Unless...
// The year is also evenly divisible by 400. Then, it is a leap year.

function isLeap(year) {
    let status = false;
    if (year % 4 === 0) {
        status = true;
        if (year % 100 === 0) {
            status = false;
            if (year % 400 === 0) {
                status = true;
            } else {
                status = false;
            }
        } else {
            status = true;
        }
    } else {
        status = false;
    }
    return status;
}

module.exports = isLeap;