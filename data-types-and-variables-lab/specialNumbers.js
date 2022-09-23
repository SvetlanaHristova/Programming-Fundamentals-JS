function specialNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let sum = Math.floor(i / 10) + i % 10;

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
specialNumbers(20);
specialNumbers(20);