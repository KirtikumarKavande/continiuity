const equalPairs = function(grid) {
    let rowMap = new Map();
    let colMap = new Map();
    let count = 0;

    // Count occurrences of each row as strings in rowMap
    for (let row = 0; row < grid.length; row++) {
        let rowStr = grid[row].join('+');
        rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
    }

    // Count occurrences of each column as strings in colMap
    for (let col = 0; col < grid[0].length; col++) {
        let colStr = grid.map(row => row[col]).join('+');
        // let colStr = grid.map(row => {
        //     console.log(row)
        //     return row[col]})


        colMap.set(colStr, (colMap.get(colStr) || 0) + 1);
    }

    // Count pairs where rows and columns match
    for (let [rowStr, rowCnt] of rowMap.entries()) {
        if (colMap.has(rowStr)) {
            count += rowCnt * colMap.get(rowStr);
        }
    }

    return count;
};

let grid=[[3,2,1],[1,7,6],[2,7,7]]
equalPairs(grid)