
//bind
let obj = {
  name: "Iphone",
  price: 100000,
  rating: 4.3,
};
function showName() {
  console.log("my name is",this.name);
}
let d = showName.bind(obj);
d()

//call 
let obj2={
  x:10,
  getX:function(){
    console.log(this.x)
  }
}

   let t=obj.getX
   t.call(obj)