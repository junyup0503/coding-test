function solution(A, B) {
    let count = 0; 
    for(let i = 0; i < A.length; i++) {
      if(A !== B) {
         let temp = A.charAt(A.length-1);
         A = `${temp}${A.substr(0, A.length-1)}`;
          count++;
         }
    
    }
    return A === B ? count : -1;
}