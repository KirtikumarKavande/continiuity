Function.prototype.customApply=function(obj,args){
let key=Symbol("uniqueKeyForApply")
    obj[key]=this
    return obj[key](...args)

}

let obj={
    name:"kirti"
}

function printName(tt,b,c){
    console.log(this.name,tt,b)

    return "kkkk"
}


console.log(printName.customApply(obj,["a",2,3,5]))