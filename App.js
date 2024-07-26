var predictPartyVictory = function(senate) {
    let Radiant=[]
    let Dire=[]
    let n=senate.length
    for(let i=0;i<senate.length;i++){
      if(senate[i]==="R"){
          Radiant.push(i)
      }else{
          Dire.push(i)
      }
    }
    while(Dire.length!==0 && Radiant.length!==0){
      rIndex=Radiant.shift()
      sIndex=Dire.shift()
      if(rIndex<sIndex){
          Radiant.push(rIndex+n)
      }else{
          Dire.push(sIndex+n)
      }
    }
     return Radiant.length!==0?"Radiant":"Dire"
  };