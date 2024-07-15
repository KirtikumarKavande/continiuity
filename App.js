var maxVowels = function (s, k) {
  let currentVowelCount = 0;
  let maxVowels = 0;
  let vowelList = "aeiou";
  for (let i = 0; i < k; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      currentVowelCount++;
    }
  }
  maxVowels = currentVowelCount;
  for (let i = k; i < s.length; i++) {
    if (!vowelList.includes(s[i]) && vowelList.includes(s[i - k])) {
      currentVowelCount -= 1;
    } else if (vowelList.includes(s[i]) && !vowelList.includes(s[i - k])) {
      currentVowelCount += 1;
    }
    if (currentVowelCount > maxVowels) {
      maxVowels = currentVowelCount;
    }
  }
  return maxVowels;
};
