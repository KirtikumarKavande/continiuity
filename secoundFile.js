const fang={
  name:"microsoft",
  year:2024
}

const employee={
  name:"kirtikumar",
  role:"developer",
  hobby(){
    console.log("love to play cricket")
  }
}
fang.__proto__=employee

fang.hobby()
