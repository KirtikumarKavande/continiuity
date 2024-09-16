var gcdOfStrings = function(str1, str2) {
    let i=1
 if(str1+str2!==str2+str1) return ""
    let maxNumber=Math.min(str1.length,str2.length)
    let gcd=null
    for (i=0;i<=maxNumber;i++){
        if(str1.length%i===0 && str2.length%i===0 ){
            gcd=i
        }
    }
       let sub1=str1.substring(0,gcd)
       let sub2=str2.substring(0,gcd)
       if(sub1===sub2){
        return sub1
       }else{
        while(sub1!==sub2){
             sub1=str1.substring(0,gcd--)
             sub2=str2.substring(0,gcd--)
        }
  
        return str1.substring(0,gcd)

       
       }
};