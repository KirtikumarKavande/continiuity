function callDemo(data){
    console.log(data)
console.log(this.name)
}

let obj={
    name:'a'
}

callDemo.apply(obj,[2,34,6,8])