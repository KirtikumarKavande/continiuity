function Parent(name,age) {
    this.name=name;
    this.age=age
    
}



function Child(name,age,clg) {
    this.clg=clg
    Parent.call(this,name,age)

    this.printDetails=function(){
      console.log(this.name,this.age, this.clg)  
    }
    
}

let data= new Child("kirti",10,"GCEK")
data.printDetails()