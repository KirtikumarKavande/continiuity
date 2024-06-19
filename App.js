// function findFibonacci(num) {
//   if (num === 0) return 0;
//   if (num === 1) return 1;

//   return findFibonacci(num - 1) + findFibonacci(num - 2);
// }
// console.log(findFibonacci(10));


function findFibonacciIteratively(num) {
  let n0 = 0;
  let n1 = 1;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    temp = n0 + n1;
    n0 = n1;
    n1 = temp;
  }
  return n0;
}

console.log(findFibonacciIteratively(5));
