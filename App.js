function balanceParametersOfSameType(array, startingIndex = 0, count = 0) {
  if (startingIndex === array.length && count === 0) return true;
  if (count < 0) return false;

  if (array[startingIndex] === "(") {
    return balanceParametersOfSameType(array, startingIndex + 1, count + 1);
  } else if (array[startingIndex] === ")") {
    return balanceParametersOfSameType(array, startingIndex + 1, count - 1);
  }
  return false
}
let array = ["(", "(", ")", ")", "(", ")"];
console.log(balanceParametersOfSameType(array));
