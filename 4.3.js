function random(min, max) {
    return min +Math.floor( Math.random() * (max - min));
  }
  console.log(random(1,10));

 

  function multirand(n){
    
    let tab = [];
    for (let i=0;i<n;i++){
        tab.push(random(1,10));
    }
    return tab;
  }

  console.log(multirand(random(1,10)));
