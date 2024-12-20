
function printName(a,b) {
  console.log(this.name)
  console.log(a,b)
  return "hello"
}
let obj={
  name:"kirti"
}
Function.prototype.customCall=function(...rest){
  let values=[...rest]
 let [obj,...data]=values
 let key=Symbol("uniqueKeyForCall")
  let callObj={
  ...obj,
    [key]:this
  }
  return callObj[key](...data)

}
console.log(printName.customCall(obj,"1","2")) 



