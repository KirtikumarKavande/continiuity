function download(url, func) {
    setTimeout(() => {
        func(url)
        func(url)
    }, 5000)
}


download("kk.com", function (data) {
    console.log("downloaded from url", data)
})

//converting to promise


function downloadPromise(url){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
        res(url)
    },5000)
  })
}
downloadPromise("kk1.com").then((data)=>{
    console.log("downloaded from",data)
})