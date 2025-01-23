let array = ["flower", "flow", "flight"]

function largestCommonPrefix(params) {
    let prefix = array[0]
    for (let index = 1; index < array.length; index++) {
        let element = array[index];
        while (!element.startsWith(prefix)) {
            prefix=prefix.slice(0,prefix.length-1)
        }
    }
    return prefix
}

console.log(largestCommonPrefix(array))