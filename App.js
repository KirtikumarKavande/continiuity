/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  m = mat.length;
  n = mat[0].length;
  let row = 0;
  let col = 0;
  if (m * n !== r * c) return mat;
  //below is correct implimentaion of black array with given mXn
  let result = Array(r).fill(0);
  for (let i = 0; i < r; i++) {
    result[i] = Array(c).fill(0);
  }

  for (let i = 0; i < mat.length; i++) {
    for (j = 0; j < mat[i].length; j++) {
      result[row][col] = mat[i][j];
      col++;
      if (col === c) {
        row++;
        col = 0;
      }
    }
  }
  return result;
};
