// const findNoOfKeyOccurrence = (array,key) => {
//   if(array.length===0) return 0
//   if(key===array.pop()){
//     return findNoOfKeyOccurrence(array,key)+1
//   }

//   return findNoOfKeyOccurrence(array,key)

// };
// let key =3
// let array = [2,3,5,7,2,2,8,3,8,3,9,7,4,2];
// console.log(findNoOfKeyOccurrence(array,key));
const findNoOfKeyOccurrence = (array, key, index = 0) => {
  if (index >= array.length) return 0;
  // return array[index] === key
    // ? findNoOfKeyOccurrence(array, key,index+1) + 1
  //   : findNoOfKeyOccurrence(array, key,index+1) + 0;
  return (array[index] === key
    ? 1:0 )+findNoOfKeyOccurrence(array, key, index + 1);
};
let key = 3;
let array = [2, 3, 5, 7, 2, 2, 8, 3, 8, 3, 9, 7, 4, 2];
console.log(findNoOfKeyOccurrence(array, key));
