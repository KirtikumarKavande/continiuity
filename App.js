// let str = "kirtikumar";

// let count = 0;
// function countVowels(str) {
//   console.log("rendered")
//   const lastChar = str[str.length - 1]
//   if (lastChar === "a" || lastChar === "e" || lastChar === "i" || lastChar === "o" || lastChar === "u") {
//     count++;
//   }
//   if (str.length === 0) return;

//   countVowels(str.substring(0, str.length - 1));
// }

// countVowels(str)
// console.log(count)

let str = "hello";

function isVowel(character) {
  let vowels = "aeiou";
  if (vowels.includes(character)) {
    return true;
  } else {
    return false;
  }
}

function countVowels(str) {
  if (str.length === 1) {
    return Number(isVowel(str[0]));
  }

  return countVowels(str.substring(0,str.length-1))+isVowel(str[str.length-1])
}

console.log(countVowels(str))
