var guessNumber = function(n) {
    let i=1
   let j=n
   for (let index = 0; index <=n; index++) {
       let mid=Math.floor((i+j)/2) 
          let result= guess(mid)
       if(result===0){
           return mid
       }else if(result===1){
           i=mid+1

       }else{
           j=mid-1
       }
       
   } 
};