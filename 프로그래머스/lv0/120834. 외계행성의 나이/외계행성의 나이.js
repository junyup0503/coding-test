function solution(age) {
    var answer = '';
    const alp = ['a','b','c','d','e','f','g','h','i','j'];
    let temp = age;
    while(temp) {
        const t = temp % 10;
        temp = Math.floor(temp /10);
        answer = alp[t] + answer;
    }
    return answer;
}