let array = [1, 2, 4, [7, 8, [12, 4, 9], [92, 7]]]


Array.prototype.customFlat = function () {
    let result = []
    function flat(array) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                flat(array[i])
            } else {
                result.push(array[i])
            }
        }
     

    }
        flat(this)

  
    return result


}


console.log(array.customFlat())