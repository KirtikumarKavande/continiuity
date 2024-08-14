
let arr = [4, 5, 7, 9, 12, 16]


function iterator() {
  let i = -1
  function next() {
    i=i+1
    return { value: arr[i], done: arr.length-1 === i }
  }
  return { next }
}


let iteratorObj = iterator()


console.log(iteratorObj.next())
console.log(iteratorObj.next())
console.log(iteratorObj.next())
console.log(iteratorObj.next())
console.log(iteratorObj.next())
console.log(iteratorObj.next())