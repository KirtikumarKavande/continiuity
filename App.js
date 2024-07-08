var reverseVowels = function (s) {
  let vowels = "aeiouAEIOU";
  let i = 0;
  let j = s.length - 1;
  let arrayFromString = s.split("");
  while (i < j) {
    while (!vowels.includes(arrayFromString[i]) && i < j) {
      i++;
    }
    while (!vowels.includes(arrayFromString[j]) && i < j) {
      j--;
    }
    let temp = arrayFromString[j];
    arrayFromString[j] = arrayFromString[i];
    arrayFromString[i] = temp;
    i++;
    j--;
  }
  return arrayFromString.join("");
};
