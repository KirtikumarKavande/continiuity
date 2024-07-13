var maxOperations = function(nums, k) {
    let sortedArray=nums.sort((a,b)=>a-b)
    let i=0
    let j=sortedArray.length-1
    let count=0
    while(i<j){
        if(sortedArray[i]+sortedArray[j]===k){
            count++
            i++
            j--
        }else if(sortedArray[i]+sortedArray[j]<k){
            i++
        }else{
            j--
        }
    }
    return count
};