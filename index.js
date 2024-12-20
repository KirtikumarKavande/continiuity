let arr=[2,34,6,8]
Array.prototype.customIterator=function(){
let currIndex=-1

 const next=()=>{
  currIndex++
  return {value:this[currIndex], done:this.length<=currIndex}
}
  return {next:next}
}
let data=arr.customIterator()
console.log(data.next())
console.log(data.next())
console.log(data.next())
console.log(data.next())
console.log(data.next())