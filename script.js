Array.prototype.customFilter=function(cb){
let arr=[]
    for (let index = 0; index < this.length; index++) {
         let result= cb(this[index],index)
         if(result){
            arr.push(this[index])
         }
        
    }

    return arr

}

let res=[1,2,3,4,5].customFilter((item)=>{
    return item/2
})
console.log(res)

let res2=[1,2,3,4,5].filter((item)=>{
    return item/2
})
console.log(res2)