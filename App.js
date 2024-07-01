const grid = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "L", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];
function findingLand(grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;
  const visited = new Set();
  let count = 0;
  function dfs(r, c) {
    if (
      r < 0 ||
      r >= rowLength ||
      c < 0 ||
      c >= colLength ||
      visited.has(r + "," + c) ||
      grid[r][c] === "W"
    ) {
      return;
    }
    visited.add(r + "," + c);
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  for (let r = 0; r < rowLength; r++) {
    for (let c = 0; c < colLength; c++) {
      if (grid[r][c] === "L") {
        if (!visited.has(r + "," + c)) {
          count++;
          dfs(r, c);
        }
      }
    }
  }
  return count;
}
console.log(findingLand(grid));
