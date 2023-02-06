

//"double  spaces"  ==> "elbuod  secaps"

//('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');


    function reverseWords(str) {
        let a = str.split(" ").map(word => word.split("").reverse().join(""));
        return a.join(" ");
      }


      console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));