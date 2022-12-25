function persistence(num) {
    let number = 0;
    while (num.toString().length !== 1) {
      num = num.toString().split("").reduce((a,b)=>a*b);
      number++;
    }
    return number;
  }