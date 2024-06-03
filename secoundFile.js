const fang={
  name:"microsoft",
  year:2024
}
const newObj = Object.create(fang, {
  empName: { 
    value: "kirtikumar"
  },
  role: { 
    value: "developer"
  },
  hobby: {
    value: function() {
      console.log("love to play cricket");
    }
  }
});


console.log(newObj.year);    

