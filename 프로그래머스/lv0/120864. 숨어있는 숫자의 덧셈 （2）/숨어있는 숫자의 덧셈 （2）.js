function solution(my_string) {
   let numbers = my_string.match(/\d+/g);
    if (!numbers) {
        return 0;
    }
    return numbers.reduce((acc, cur) => acc + parseInt(cur), 0);
}