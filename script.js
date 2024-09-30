let array = [8, 3, 5, 7]

Array.prototype.customForEach = function (cb) {
    if (!this.length) {
        return
    }
    let result = []
    for (let i = 0; i < this.length; i++) {
       cb(this[i], i)
         }

}

const ans= array.customForEach((item)=>{
            console.log(item*item) 
})

