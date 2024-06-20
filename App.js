// function countPowResult(num, pow) {
//   let count=1
//  return calculatingPower(num,pow,count)
// }

// function calculatingPower(num,pow,count){
//   if (pow === count) {
//     return num;
//   }

//   return calculatingPower(num, pow,count+1) * num;
// }

// console.log(countPowResult(4, 3));

function countPower(num,pow){

  if(pow===0) return 1
  return countPower(num,pow-1)*num

}
console.log(countPower(4,3)
)