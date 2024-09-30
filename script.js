// let array = [8, 3, 5, 7]

// const result=array.reduce((acc,ele)=>{

//   return acc+ele


// })
// console.log(result)


Array.prototype.customReduce = function (callback, initialSum) {
    let sum = initialSum || 0
    for (let index = 0; index < this.length; index++) {
     let result=callback(sum, this[index])
      sum=result
    }
    return sum
}
const result=[1,2,3].customReduce((acc,ele)=>{
    return acc+ele*2
})

console.log(result)