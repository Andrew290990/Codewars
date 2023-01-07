function findShort(s){
    let b = s.split(' ').map(function(el) {
        return el.length
    })
    let c = Math.min(...b)
    return c
  
}