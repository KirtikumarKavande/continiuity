// function removeSpaces(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " " || str[i]==="\t") continue;

//     newStr += str[i];
//   }
//   return newStr
// }

// console.log(removeSpaces(str))

let str = "kirt     iku\tmar";

function removeSpacesAndTabsRecursively(str) {
  if (str.length === 0) return "";

  let firstLetter = str[0];
  let restOfTheString = str.slice(1);
  if (firstLetter === " " || firstLetter === "\t")
    return removeSpacesAndTabsRecursively(restOfTheString);

  return firstLetter + removeSpacesAndTabsRecursively(restOfTheString);
}
console.log(removeSpacesAndTabsRecursively(str))