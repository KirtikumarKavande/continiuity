const splitBunches = (arr) => {
    let result=[]
      function placeItem(obj){
        if(obj.quantity!==1){
          result.push({...obj,quantity:1})
          obj.quantity=obj.quantity-1
          placeItem(obj)
        }else {
          result.push({...obj,quantity:1})
          
        }
      }
      for(let element of arr){
        placeItem(element)
      }
    
      return result
    };
    let ans=splitBunches([{name:"a",quantity:2},{name:"b",quantity:1},{name:"c",quantity:3}])


    console.log(ans)