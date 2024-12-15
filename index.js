
let p1=new Promise((resolve,reject)=>{
  setTimeout(() => {
  resolve("promise1")
  }, 1000);

})
let p2=new Promise((resolve,reject)=>{
  setTimeout(() => {
  resolve("promise2")
  }, 7000);

})
async function promiseDemo(){
let data= await Promise.race([p1,p2])
return data

}
let data=promiseDemo()
console.log(data)
