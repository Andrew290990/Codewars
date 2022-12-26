
function countPositivesSumNegatives(input) {

    let arr = input
    let arr2 = 0
    let arr3 = []
    let summ = []
    
    let r = arr.filter(function(el) {
      if(el > 0){
        arr2++  
      }
    })
    summ.push(arr2)
    
    let f = arr.filter(function(el) {
      if (el < 0) {
        arr3.push(el)
      }
    })
    let arr4 = arr3.reduce(function(acc, el) {
      return acc + el
    })
    summ.push(arr4)
    return summ
    }