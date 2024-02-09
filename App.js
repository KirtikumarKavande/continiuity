function abc(){
  setTimeout(() => {
   console.log("hi")
   
  }, 10000);
}

Promise.resolve("foo")
  .then(
    (string) =>    //foo
      new Promise((resolve, reject) => {
        setTimeout(() => {
          string += "bar";
          resolve(string);
        }, 1000);
      })
  )

  .then((string) => {
    setTimeout(() => {
      string += "baz";
      console.log(string);
    }, 1);
    return string;
  })

  .then((string) => {
    console.log(
      "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising"
    );

    console.log("last",string);
  });

  console.log("good to go")
