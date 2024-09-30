let array = [8, 3, 5, 7]

Array.prototype.customMap = function (cb) {
    if (!this.length) {
        return
    }
    let result = []
    for (let i = 0; i < this.length; i++) {
        result[i] = cb(this[i], i)
    }
    return result

}

const ans= array.customMap((item)=>{
    return item*item
})

console.log(ans)