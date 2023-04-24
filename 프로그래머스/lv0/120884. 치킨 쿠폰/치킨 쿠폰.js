function solution(chicken) {
    let coupons = chicken;
    let freeChickens = 0;

    while (coupons >= 10) {
        let newFreeChickens = Math.floor(coupons / 10);
        freeChickens += newFreeChickens;
        coupons = coupons % 10 + newFreeChickens;
    }

    return freeChickens;
}