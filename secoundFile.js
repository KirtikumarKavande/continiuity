function timeOut() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("timeOut");
    }, 5000);
  });
}

timeOut()
  .then((data) => {
    const dataFetch = fetch("https://jsonplaceholder.typicode.com/users");
    return dataFetch
  })
  .then((res) => {
    return res.json()
  }).then((data) => {
    console.log("data",data)
  })
