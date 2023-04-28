function solution(name, yearning, photo) {
    const answer = [];
    for (const p of photo) {
        const people = [];
        for (const n of name) {
            if (p.includes(n)) {
                people.push(n);
            }
        }
        let score = 0;
        for (const p of people) {
            const idx = name.indexOf(p);
            score += yearning[idx];
        }
        answer.push(score);
    }
    return answer;
}