function abbrevName(name){
    let a = name
  
    let b = a.split(' ')
    
    let c = b.map(function(el) {
      return el[0]
    })
    let d = c.join('.').toUpperCase()
    return d
    
  
  }