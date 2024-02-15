//mXn ==>

let str = "";
function convertToString(arr, noOfRow, noOfCol) {
  for (col = 0; col < noOfCol; col++) {
    if (col % 2 === 0) {
      for (row = 0; row < noOfRow; row++) {
        str += " " + arr[row][col];
      }
    } else {
      for (row = noOfRow - 1; row >= 0; row--) {
        str += " " + arr[row][col];
      }
    }
  }
  return str;
}
let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(convertToString(arr, 4, 4));
