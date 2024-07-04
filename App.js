var mergeAlternately = function(word1, word2) {
  let i=0
  let j=0
  let str=""
  while(word1[i]&& word2[j]){
      str+=word1[i]
      str+=word2[i]
      i++
      j++
  }
      while(i<word1.length){

          str+=word1[i]
          i++
      }
      while(j<word2.length){
          str+=word2[j]
          j++
      }
  return str
};