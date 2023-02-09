//("abcd"), "aabbccdd");




function doubleChar(str) {
    let a = str
    let b = a.split('')
    let c = b.map((el)=>{return el + el}).join('')
    return c


  }






console.log(doubleChar("aabbccdd"));