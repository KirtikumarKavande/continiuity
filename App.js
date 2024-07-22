var equalPairs = function(grid) {
  let map2 = new Map();
  let rowArray=[]
  let count = 0;
  const columns = [];
  for (let col = 0; col < grid[0].length; col++) {
    columns[col] = [];
    for (let row = 0; row < grid.length; row++) {
      columns[col].push(grid[row][col]);
    }
  }
  for(let i of grid){
   rowArray.push(i.join(",")) 
  }
  for (let index = 0; index < columns.length; index++) {
    map2.set(
      columns[index].join(","),
      map2.get(columns[index].join(",")) ? map2.get(columns[index].join(",")) + 1 : 1
    );
  }
  let arr2 = Array.from(map2.keys());
  rowArray.forEach((item) => {
    if (map2.has(item)) {
      count +=map2.get(item)
    }
  });
  return count;
  };
  