function solution(data, col, row_begin, row_end) {
    var answer = 0;
    col = col-1;
    row_begin = row_begin - 1;
    
    for(let index in data) {
        const target = data[index];
        let cur = index - 1;
        
        while (cur >= 0 && (target[col] < data[cur][col] || (target[col] === data[cur][col] && target[0] > data[cur][0]))) {
            data[cur+1] = data[cur];
            cur--;
        }
        data[cur+1] = target;
    }
    for(row_begin; row_begin < row_end; row_begin++){
        const temp = data[row_begin].reduce((acc, cur) => {
            return acc + (cur%(row_begin+1));
        }, 0);
        answer = temp ^ answer;
    }
    return answer;
}