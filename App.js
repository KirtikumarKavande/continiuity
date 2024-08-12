
function fnForPromise() {
    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            resolve("kk")

        }, 20000)
    }).then((val) => {
        console.log(val)
    })
}

fnForPromise().then((val) => {
    console.log(val)
},()=>{
    console.log("error")
})
console.log(data)

console.log("end")