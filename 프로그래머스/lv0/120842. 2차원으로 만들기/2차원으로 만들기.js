function solution(num_list, n) {
    var answer = [];
    for(let i = 0; i < num_list.length/n; i++) {
        answer.push([]);
    }
    let count = 0;
    for(let i of num_list) {
        if(answer[count].length === n) count++;
        answer[count].push(i);
    }
    return answer;
}