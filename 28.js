function digitize(n) {
    let a = n
    let b = String(a).split('').reverse()
    let c = b.map(function(el) {
      return Number(el)
    })
    return c
  }