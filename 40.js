









function createArray(number){
    var newArray = [];
    
    for(let i = 0; i <= number;i++){
        if(i > 0) {
            newArray.push(i);
        }
      
      
       
    }
    
    return newArray;
  }

  console.log(createArray(2));