var closeStrings = function (word1, word2) {
  let map1 = new Map();
  let map2 = new Map();
  if (word1.length !== word2.length) return false;
  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
  }
  for (let i = 0; i < word2.length; i++) {
    map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
  }

  for (let key of map1.keys()) {
    if (!map2.get(key)) {
      return false;
    }
  }
  let array1 = Array.from(map1.values());
  let array2 = Array.from(map2.values());
  array1 = array1.sort((a, b) => b - a);
  array2 = array2.sort((a, b) => b - a);

  if (array1.join("") === array2.join("")) {
    return true;
  } else {
    return false;
  }
};
