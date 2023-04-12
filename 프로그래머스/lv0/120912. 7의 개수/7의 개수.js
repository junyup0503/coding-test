function solution(array) {
    let count = 0;
    
    for(let i of array.join('')) {
        if(i === '7') count++;
    }
    
    return count;
  }