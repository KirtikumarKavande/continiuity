const d= Promise.resolve("foo")
  .then(
    (string) => 
      new Promise((resolve, reject) => {
        setTimeout(() => {
          string += "bar";       
          resolve(string);   
        }, 10000);
      })
  )
console.log(d)
  d.then((string) => {        
    setTimeout(() => {
      string += "baz";           
      console.log(string);
    },2000);
    return string;         
  })

  .then((string) => {   
    //1   
    console.log(
     "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising"
    );

    console.log(string);          //2)foobar
  });
