var compress = function(chars) {
    let i=0
    let j=0
    let index=0
   while(j<chars.length){

   while(chars[i]===chars[j] && j<chars.length){
    j++
   }
   chars[index++]=chars[j-1]
   if(index<chars.length){
    if(j-i>=10){
        let stringFromNumber=(j-i).toString()
        for(let k=0;k<stringFromNumber.length;k++){
            chars[index++]=stringFromNumber[k]
        }
    }else if(j-i>1){
        chars[index++]=j-i
    }

   }
    i=j

   }
   return index

};
chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
console.log(compress(chars))