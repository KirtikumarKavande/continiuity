// "3[a2[c]]"  "3[a]2[bc]"
var decodeString = function (s) {
  let stack = [];
  let currentNum = 0;
  let currentStr = "";
  for (const char of s) {
    if (char <= "9" && char >= "0") {
      currentNum = currentNum * 10 + Number(char);
    } else if (char === "[") {
      stack.push(currentNum);
      stack.push(currentStr);
      currentNum = 0;
      currentStr = "";
    } else if (char === "]") {
      let poppedString = stack.pop();
      let poppedNum = stack.pop();
      currentStr = poppedString + currentStr.repeat(poppedNum);
    } else {
      currentStr += char;
    }
  }
  return currentStr;
};
