

function downloadPromise(url) {
    return new Promise((res, rej) => {
        const dataFetch = fetch("https://jsonplaceholder.typicode.com/users");
        res(dataFetch)
    })
}
downloadPromise("kk1.com").then((data) => {
    return data
}).then((x) => {
    return x.json()
}).then((m) => {
    console.log(m)
})