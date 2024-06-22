const findLengthOfStringRecursively = (str) => {
  if (str.length === 0) return 0;

  return findLengthOfStringRecursively(str.substring(1)) + 1;
};
let str = "kirtikumar";
console.log(findLengthOfStringRecursively(str));
