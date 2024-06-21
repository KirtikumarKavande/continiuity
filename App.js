// function removeAdjustDuplicate(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!str[i + 1] || str[i] !== str[i + 1]) {
//       result += str[i];
//     }
//   }
//   return result;
// }

// function removeAdjustDuplicateRecursively(str) {
//   if (str.length === 1) return str;

//   let firstLetter = str[0];
//   let restOfString = str.slice(1);

//   if (firstLetter === restOfString[0])
//     return removeAdjustDuplicateRecursively(restOfString);

//   return firstLetter + removeAdjustDuplicateRecursively(restOfString);
// }

// let str = "aaaaabbbbbdbbccccccccccccc";
// console.log(removeAdjustDuplicateRecursively(str));

function removeAllConsecutiveDuplicates(str) {
  let stack = [];
  return removeAdjustDuplicateRecursively(str, stack);
}

function removeAdjustDuplicateRecursively(str, stack) {
  if (str.length === 0 && str !== stack[stack.length - 1]) return str;
  if (str.length === 0) return "";

  let firstLetter = str[0];
  let restOfString = str.slice(1);

  if (firstLetter === restOfString[0]) {
    stack.push(firstLetter);

    return removeAdjustDuplicateRecursively(restOfString, stack);
  }
  if (firstLetter === stack[stack.length - 1]) {
    stack=[]
    return removeAdjustDuplicateRecursively(restOfString, stack);
  }
  console.log(stack)

  return firstLetter + removeAdjustDuplicateRecursively(restOfString, stack);
}
let str = "a";

console.log(removeAllConsecutiveDuplicates(str));
