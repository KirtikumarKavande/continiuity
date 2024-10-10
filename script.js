// cb
function download(url,cb) {
    
    setTimeout(()=>{
        cb("hello world"+url)
        cb("hello world"+url)
        cb("hello world"+url)
    },2000)
}

download("https://www.google.com",function(data){

    console.log("downloaded",data)
})

// promise

function fetachData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("url")
            resolve("url")
            resolve("url")
        },4000)
    })
}


fetachData().then((data)=>{
console.log("dataa",data)
})