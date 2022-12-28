
function fakeBin(x){
    var a = x.split('')
    var sum = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] < 5) {
            sum.push(0)
        } else {
            sum.push(1)
        }
    }
    return sum.join("");
}