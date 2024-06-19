function findFirstOccurrence(array, toFind, startingIndex) {
  if (array[startingIndex] === toFind) {
    return startingIndex;
  }
  if (array.length === startingIndex + 1) {
    return -1;
  }

  return findFirstOccurrence(array, toFind, startingIndex + 1);
}
let array = [1, 3, 4, 5, 67, 35, 676, 1, 41];
let toFind = 41;
startingIndex = 0;
console.log(findFirstOccurrence(array, toFind, startingIndex));
