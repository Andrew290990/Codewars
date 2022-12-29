

function findAverage(array) {
  if (array.length == 0) {
    return 0
  }
  let sum = array.reduce(function(acc, el) {
  return acc +el
    
  })
  let length = array.length
  return sum / length
}