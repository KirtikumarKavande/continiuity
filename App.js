var findMaxAverage = function(nums, k) {
    let i=0
  let maxSum=0
   let sum=0

   for(let i=0;i<k;i++){
        sum+=nums[i]   
   }
   maxSum=sum
    for(let i=k;i<nums.length;i++){
        sum=sum-nums[i-k]+nums[i]
        if(sum>maxSum){
                maxSum=sum
        }
    }
    return (maxSum/k).toFixed(5)
};