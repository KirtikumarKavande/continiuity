let arr = [-10, -10, -10];




function secondLargest(arr){
  
  let larget=-Infinity
  let secLargest=-Infinity
  
  for(const ele of arr){
    if(ele>larget){
      secLargest=larget
      larget=ele
}else if(ele>secLargest && ele !==larget){
      secLargest=ele
    }
  }
  
  return secLargest
}

console.log(secondLargest(arr));
