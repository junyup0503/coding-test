function solution(numbers) {
    let answer = numbers.reduce((a, c) => { return a+c }, 0) / numbers.length;
    return answer;
}