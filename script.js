Function.prototype.customBind = function (obj, ...args) {
    let key = Symbol("uniqueKeyForApply")
    obj[key] = this
    return function bindFn(...bindArgs) {
        return obj[key](...args,...bindArgs)

    }

}

let obj = {
    name: "kirti"
}

function printName(a, b, c) {
    console.log(this.name, a, b)

    return "kkkk"
}


console.log(printName.customBind(obj, 1,)("supereb"))


