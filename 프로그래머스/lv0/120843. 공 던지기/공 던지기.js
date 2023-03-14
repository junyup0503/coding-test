function solution(numbers, k) {
    let answer = 0;
    let temp = 0;
    let count = 0;
    while(count < k) {
        if(temp>numbers.length) temp -= numbers.length;
        answer = numbers[temp];
        temp += 2;
        count++;
    }
    
    return answer;
}