function squareSum(numbers){
  
    if (numbers.length == 0) {
      return 0
    }
    
    let a = numbers
  
    let b = a.map(function(el) {
      return el ** 2
    })
    let c = b.reduce(function(acc, el) {
      return acc + el
    })
    return c
  }