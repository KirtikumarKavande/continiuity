Function.prototype.customCall=function(obj,...args){
let key=Symbol("uniqueKeyForCall")
    obj[key]=this
    return obj[key](...args)

}



let obj={
    name:"kirti"
}

function printName(msg,tt){
    console.log(this.name,"message:"+msg,tt)

    return "kkkk"
}


console.log(printName.customCall(obj,"how r u","supereb"))