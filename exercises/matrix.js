// This function should return a n x n spiral matrix.

function matrix(n) {
    
    // Create an array of n initially empty subarrays.
    const spiral = [];
    for (let i = 1; i <= n; i++) {
        spiral.push([]);
    }

    // Set a counter, which will stop when we reach the square of n.
    let counter = 1;

    // We must keep track of the columns and rows.
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    
    while (startColumn <= endColumn && startRow <= endRow) {
        
        // This for loop handles the first row.
        for (let i = startColumn; i <= endColumn; i++) {
            spiral[startRow][i] = counter;
            counter++;
        }
        
        startRow++;

        // This for loop handles the last column.
        for (let i = startRow; i <= endRow; i++) {
            spiral[i][endColumn] = counter;
            counter++;
        }

        endColumn--;

        // This for loop handles the last row.
        for (let i = endColumn; i >= startColumn; i--) {
            spiral[endRow][i] = counter;
            counter++;
        }

        endRow--;

        // This for loop handles the first column.
        for (let i = endRow; i >= startRow; i--) {
            spiral[i][startColumn] = counter;
            counter++;
        }

        startColumn++;

    }

    return spiral;
}


module.exports = matrix;