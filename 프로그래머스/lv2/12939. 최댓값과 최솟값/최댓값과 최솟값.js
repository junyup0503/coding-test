function solution(s) {
    let temp = s.split(' ');
    
    temp.sort(function compare(a, b) {
      return a - b;
    });
    
    var answer = '';
    
    answer = `${temp[0]} ${temp[temp.length-1]}`;
    
    return answer;
}