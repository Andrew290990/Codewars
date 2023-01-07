function filter_list(l) {
    let c =[]
    
    let b = l.map(function(el) {
      if(typeof el === 'number') {
          return c.push(el)
      }
      
    })
    return c
  }